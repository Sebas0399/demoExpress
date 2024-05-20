import { Router } from "express";
import { Dropbox } from "dropbox";
import { PrismaClient } from "@prisma/client"

import multer from "multer";
import fs from "fs";
const router = Router();
const prisma = new PrismaClient();
const upload = multer({ dest: 'uploads/' });

router.get("/",async (req, res) => {
    const documentosUsuarios=await prisma.documentosUsuarios.findMany()
    res.send(documentosUsuarios);
  });
  router.post("/", async (req, res) => {
        const nuevoDocumentoUsuario=await prisma.documentosUsuarios.create({
            data: req.body,
        })
        res.send(nuevoDocumentoUsuario);
  })
  //vamos a subir un archivo a la base de datos
  // Configurar las claves de la API
  const token=process.env.ACCESS_TOKEN
  // Inicializar el SDK de Dropbox
  const dbx = new Dropbox({ accessToken: token });
  router.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    const fileContents = fs.readFileSync(file.path);
    // Subir el archivo a Dropbox
    dbx.filesUpload({ path: '/' + file.originalname, contents: fileContents })
        .then(response => {
            console.log('Archivo subido correctamente:', response);
            
           
        })
        .catch(error => {
            console.error('Error al subir el archivo:', error);
            res.status(500).send('Error al subir el archivo a Dropbox.');
        });
});


export default router;
