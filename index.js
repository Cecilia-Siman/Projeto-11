import express from "express";
import { request } from "express";
import { response } from "express";
import cors from "cors";

const server = express();
server.use(cors());

let user;
let picture;

server.get('/sign-up',(request,response) => {
    user = request.username;
    picture = request.avatar;
    response.send("OK");
    console.log(user, picture);
});

server.get('/teste',(request,response) => {
    response.send("teste");
});


server.listen(5000);