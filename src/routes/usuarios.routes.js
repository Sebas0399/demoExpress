import { Router } from "express";
import { PrismaClient } from "@prisma/client"

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
    const usuarios = await prisma.usuarios.findMany()
    res.json(usuarios)
});
router.get("/:sexo", async (req, res) => {
    const usuarios = await prisma.usuarios.findMany({where:{sexo:req.params.sexo}})
    res.json(usuarios)
});
router.get("/nombre/:nombre", async (req, res) => {
    const usuarios = await prisma.usuarios.findMany( {where:{nombres:{
        contains:req.params.nombre
    }}})
    res.json(usuarios)
});
router.post("/", async (req, res) => {
    const newUsuario = await prisma.usuarios.create({
        data: req.body,
    })
    res.json(newUsuario)
})
export default router;
