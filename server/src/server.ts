import express from "express";
import { handleConnection } from "./database";

const PORT = process.env.PORT || 3000;

const server = express();

handleConnection();

server.get("/", async (req, res) => {
  return res
    .status(200)
    .send("Codebank API server ©All right reserved Codebank");
});

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
