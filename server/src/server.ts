import express from "express";
import { handleConnection } from "./database";
import api from "./routes";

const PORT = process.env.PORT || 3000;

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

handleConnection();

server.get("/", async (req, res) => {
  return res
    .status(200)
    .send("Codebank API server ©All right reserved Codebank");
});

server.use("/api", api);

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
