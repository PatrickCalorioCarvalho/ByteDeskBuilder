-- CreateTable
CREATE TABLE "StatusTicket" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoPor" INTEGER NOT NULL DEFAULT 1,
    "alteradoEm" TIMESTAMP(3) NOT NULL,
    "alteradoPor" INTEGER NOT NULL DEFAULT 1,
    "deletadoEm" TIMESTAMP(3),

    CONSTRAINT "StatusTicket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StatusTicket_nome_key" ON "StatusTicket"("nome");
