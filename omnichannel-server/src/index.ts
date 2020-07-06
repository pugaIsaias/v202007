import { Request, Response } from "express";
import server from "./server";

server.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
});

server.get("/", async (req: Request, res: Response) => {
  console.log("GET");
});

server.listen("8001", () => {
  console.log("listening");
});
