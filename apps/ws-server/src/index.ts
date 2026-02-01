import { WebSocketServer } from "ws";
import { client } from "@repo/db";
const wss = new WebSocketServer({ port: 3001 });


wss.on("connection", (ws) => {
    client.user.create({
        data: {
            username: "ws-server",
            password: "ws-server"
        }
    })
    ws.send("Hello from ws-server");
});