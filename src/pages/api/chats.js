import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;

      const chat = await prisma.chat.create({
        data,
      });

      res.status(200).json(chat);
    } catch (err) {
      res.status(500).json({ message: "Falha ao gravar o chat" });
    }
  } else if (req.method === "GET") {
    try {
      const chats = await prisma.chat.findMany();
      res.status(200).json(chats);
    } catch (err) {
      res.status(500).json({ message: `Falha ao buscar os chats: ${err}` });
    }
  }
}
