-- CreateTable
CREATE TABLE "Dependente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nascimento" DATETIME NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "vacinaId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Dependente_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Dependente_vacinaId_fkey" FOREIGN KEY ("vacinaId") REFERENCES "Vacina" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
