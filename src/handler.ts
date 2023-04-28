import { RouteHandler } from "fastify";

export const handler: RouteHandler = async () => {
  return { hello: "world", time: new Date(), abc: true };
};
