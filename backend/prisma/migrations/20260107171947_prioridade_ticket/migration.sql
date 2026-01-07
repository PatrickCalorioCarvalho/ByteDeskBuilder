-- CreateTable
CREATE TABLE "PrioridadeTicket" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "nivel" INTEGER,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "deletadoEm" TIMESTAMP(3),
    "criadoPor" INTEGER NOT NULL DEFAULT 1,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alteradoPor" INTEGER NOT NULL DEFAULT 1,
    "alteradoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PrioridadeTicket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PrioridadeTicket_nome_key" ON "PrioridadeTicket"("nome");
