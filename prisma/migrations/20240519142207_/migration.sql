-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "sexo" TEXT NOT NULL,
    "estado" BOOLEAN NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AsociacionesDeportivas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "AsociacionesDeportivas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentosUsuarios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "extension" TEXT NOT NULL,
    "usuariosId" INTEGER NOT NULL,

    CONSTRAINT "DocumentosUsuarios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DocumentosUsuarios" ADD CONSTRAINT "DocumentosUsuarios_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
