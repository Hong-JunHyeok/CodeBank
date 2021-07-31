import fastify, { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

const PORT = process.env.PORT || 3000;
const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({ logger: true });

server.get("/", async (req, res) => {
  return {
    hello: "world",
  };
});

server.listen(PORT, "0.0.0.0", (error) => {
  if (error) throw error;
});
