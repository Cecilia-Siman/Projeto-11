import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

let user;
let picture;
let tweets = [];

server.post('/sign-up',(request,response) => {
    user = request.body.username;
    picture = request.body.avatar;
    response.send("OK");
});

server.get('/tweets',(request,response) => {
    if (tweets.length <=10){
        let list = [];
        for (let i=tweets.length-1;i>=0;i--){
            list.push(tweets[i]);
        }
        response.send(list);
    }
    else{
        let list = [];
        for (let i=1;i<=10;i++){
            let indice = tweets.length - i;
            list.push (tweets[indice]);
        }
        response.send(list);
    }
    
});

server.post('/tweets',(request,response) => {
    let text = request.body.tweet;
    let obj = {
        username:user,
        tweet:text,
        avatar:picture,
    }  
    tweets.push(obj);
    response.send("OK");
});

server.listen(5000);