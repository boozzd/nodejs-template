import fastify from "fastify";
import { handler } from "./handler";

const server = fastify();

server.get("/", handler);

async function start() {
  try {
    await server.listen({
      port: 3000,
    });
    console.log("Server listening on port 3000 🚀");
  } catch (err: unknown) {
    console.error(err);
    process.exit(1);
  }
}

start();
