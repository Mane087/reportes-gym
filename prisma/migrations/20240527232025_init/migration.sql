-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "id_sucursal" INTEGER,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Entrenador" (
    "id_entrenador" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,

    CONSTRAINT "Entrenador_pkey" PRIMARY KEY ("id_entrenador")
);

-- CreateTable
CREATE TABLE "Rutina" (
    "id_rutina" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Rutina_pkey" PRIMARY KEY ("id_rutina")
);

-- CreateTable
CREATE TABLE "Progreso" (
    "id_progreso" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "grasa_corporal" DOUBLE PRECISION NOT NULL,
    "musculo" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Progreso_pkey" PRIMARY KEY ("id_progreso")
);

-- CreateTable
CREATE TABLE "RutinasUsuario" (
    "id_rutinas_usuarios" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_rutina" INTEGER NOT NULL,
    "id_entrenador" INTEGER NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3),
    "satisfaccion" DOUBLE PRECISION,

    CONSTRAINT "RutinasUsuario_pkey" PRIMARY KEY ("id_rutinas_usuarios")
);

-- CreateTable
CREATE TABLE "RutinasEjercicio" (
    "id_rutinas_ejercicios" SERIAL NOT NULL,
    "id_rutina" INTEGER NOT NULL,
    "id_ejercicio" INTEGER NOT NULL,
    "id_equipo" INTEGER NOT NULL,
    "repeticiones" INTEGER NOT NULL,
    "series" INTEGER NOT NULL,
    "descanso" INTEGER NOT NULL,
    "duracion" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RutinasEjercicio_pkey" PRIMARY KEY ("id_rutinas_ejercicios")
);

-- CreateTable
CREATE TABLE "Equipo" (
    "id_equipo" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_compra" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Equipo_pkey" PRIMARY KEY ("id_equipo")
);

-- CreateTable
CREATE TABLE "Sucursal" (
    "id_sucursal" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,

    CONSTRAINT "Sucursal_pkey" PRIMARY KEY ("id_sucursal")
);

-- CreateTable
CREATE TABLE "EntrenadoresSucursales" (
    "id" SERIAL NOT NULL,
    "id_entrenador" INTEGER NOT NULL,
    "id_sucursal" INTEGER NOT NULL,

    CONSTRAINT "EntrenadoresSucursales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EntrenadorSucursal" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EntrenadorSucursal_AB_unique" ON "_EntrenadorSucursal"("A", "B");

-- CreateIndex
CREATE INDEX "_EntrenadorSucursal_B_index" ON "_EntrenadorSucursal"("B");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_id_sucursal_fkey" FOREIGN KEY ("id_sucursal") REFERENCES "Sucursal"("id_sucursal") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progreso" ADD CONSTRAINT "Progreso_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RutinasUsuario" ADD CONSTRAINT "RutinasUsuario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RutinasUsuario" ADD CONSTRAINT "RutinasUsuario_id_rutina_fkey" FOREIGN KEY ("id_rutina") REFERENCES "Rutina"("id_rutina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RutinasUsuario" ADD CONSTRAINT "RutinasUsuario_id_entrenador_fkey" FOREIGN KEY ("id_entrenador") REFERENCES "Entrenador"("id_entrenador") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RutinasEjercicio" ADD CONSTRAINT "RutinasEjercicio_id_rutina_fkey" FOREIGN KEY ("id_rutina") REFERENCES "Rutina"("id_rutina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntrenadoresSucursales" ADD CONSTRAINT "EntrenadoresSucursales_id_entrenador_fkey" FOREIGN KEY ("id_entrenador") REFERENCES "Entrenador"("id_entrenador") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntrenadoresSucursales" ADD CONSTRAINT "EntrenadoresSucursales_id_sucursal_fkey" FOREIGN KEY ("id_sucursal") REFERENCES "Sucursal"("id_sucursal") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EntrenadorSucursal" ADD CONSTRAINT "_EntrenadorSucursal_A_fkey" FOREIGN KEY ("A") REFERENCES "Entrenador"("id_entrenador") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EntrenadorSucursal" ADD CONSTRAINT "_EntrenadorSucursal_B_fkey" FOREIGN KEY ("B") REFERENCES "Sucursal"("id_sucursal") ON DELETE CASCADE ON UPDATE CASCADE;
