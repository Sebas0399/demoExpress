/*
  Warnings:

  - You are about to drop the `AsociacionesDeportivas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DocumentosUsuarios" DROP CONSTRAINT "DocumentosUsuarios_usuariosId_fkey";

-- DropTable
DROP TABLE "AsociacionesDeportivas";

-- AddForeignKey
ALTER TABLE "DocumentosUsuarios" ADD CONSTRAINT "DocumentosUsuarios_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "Usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
