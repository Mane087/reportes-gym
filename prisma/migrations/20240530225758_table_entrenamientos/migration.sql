-- CreateTable
CREATE TABLE "Entrenamientos" (
    "id_entrenamiento" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_entrenador" INTEGER NOT NULL,
    "id_sucursal" INTEGER NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3),

    CONSTRAINT "Entrenamientos_pkey" PRIMARY KEY ("id_entrenamiento")
);

-- AddForeignKey
ALTER TABLE "Entrenamientos" ADD CONSTRAINT "Entrenamientos_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entrenamientos" ADD CONSTRAINT "Entrenamientos_id_entrenador_fkey" FOREIGN KEY ("id_entrenador") REFERENCES "Entrenador"("id_entrenador") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entrenamientos" ADD CONSTRAINT "Entrenamientos_id_sucursal_fkey" FOREIGN KEY ("id_sucursal") REFERENCES "Sucursal"("id_sucursal") ON DELETE RESTRICT ON UPDATE CASCADE;
