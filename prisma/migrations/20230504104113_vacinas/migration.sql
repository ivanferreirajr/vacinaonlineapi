-- CreateTable
CREATE TABLE "Vacina" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "lote" TEXT NOT NULL,
    "data_vencimento" DATETIME NOT NULL,
    "data_vacinacao" DATETIME NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Vacina_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
