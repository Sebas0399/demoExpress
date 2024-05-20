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
  
  // Inicializar el SDK de Dropbox
  //const dbx = new Dropbox({ accessToken: ACCESS_TOKEN });
  //router.post('/upload', upload.single('file'), (req, res) => {
    // Obtener el archivo cargado
   // const file = req.file;
    // Leer el contenido del archivo
    //const fileContents = fs.readFileSync(file.path);
    // Subir el archivo a Dropbox
    /*dbx.filesUpload({ path: '/' + file.originalname, contents: fileContents })
        .then(response => {
            console.log('Archivo subido correctamente:', response);
            dbx.sharingListSharedLinks({ path: '/' + file.originalname })
                .then(link => {
                    console.log('Enlace permanente del archivo:', link);
                    res.send(link.result.links[0].url);
                })
                .catch(error => {
                    console.error('Error al obtener el enlace permanente del archivo:', error);
                    res.status(500).send('Error al obtener el enlace permanente del archivo.');
                });
           
        })
        .catch(error => {
            console.error('Error al subir el archivo:', error);
            res.status(500).send('Error al subir el archivo a Dropbox.');
        });
});*/


export default router;
