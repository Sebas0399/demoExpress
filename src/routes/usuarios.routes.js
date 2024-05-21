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
router.delete("/:id", async (req, res) => {
    const usuario = await prisma.usuarios.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
    });
    if (!usuario) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }
    await prisma.usuarios.delete({
        where: {
            id: parseInt(req.params.id),
        },
    });
    res.json({ message: "Usuario eliminado correctamente" });
});
export default router;
