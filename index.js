import express from "express";
import cors from "cors";

const server = express();
server.use(cors());

let user;
let picture;
let tweets = [
    {
        username: "bobesponja",
        tweet: "eu amo o hub",
        avatar:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
    },
    {
        username: "bobesponja",
        tweet: "eu não",
        avatar:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
    }
];


server.post('/sign-up',(request,response) => {
    //user = request.body.username;
    //picture = request.body.avatar;

    console.log(request.body);
    response.send("OK");
});

server.get('/tweets',(request,response) => {
    response.send(tweets);
});

server.post('/tweets',(request,response) => {
    let text = request.tweet;
    let obj = {
        username:user,
        tweet:text,
        avatar:picture,
    }  
    tweets.push(obj);
    response.send(tweets);
});



server.get('/teste',(request,response) => {
    response.send("teste");
});


server.listen(5000);