import server from "./server";
import { sourceController } from "./feature/message-source/controller/MessageController";

server.post("/message-source",sourceController);

server.listen("8001", () => {
  console.log("listening");
});
