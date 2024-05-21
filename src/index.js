import express from "express";
import cors from 'cors'

import usuarioRoutes from "./routes/usuarios.routes.js";
import documentosRoutes from "./routes/documentos.routes.js";

const app = express();
app.use(express.json());
app.use(cors)
app.use("/usuarios", usuarioRoutes);
app.use("/documentos", documentosRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
