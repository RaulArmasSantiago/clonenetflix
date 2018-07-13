import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './src/models/users';
import {createToken} from './src/resolves/create';
import {verify} from './src/resolves/verify'
import graphQLHTTP from 'express-graphql';
import schema from './src/graphql';

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://clonenetflix:batch21@ds127851.mlab.com:27851/clonenetflix');
const db = mongoose.connection;
db.on('error',() => console.log("Error al cnectar a la BD"))
    .once('open',() => console.log("Conectado a la BD!!"))

app.use(bodyParser.json());

app.post('/signup',(req,res) => {
    let user = req.body
    User.create(user).then((user) => {
        return res.status(201).json({"message":"Usuaio Creado","id":user._id})
    }).catch((err) => {
        console.log(err);
        return res.json(err);
    })
});

app.post('/login', (req,res)=>{
    const token = createToken(req.body.email,req.body.password).then((token)=>{
        res.status(201).json({token});
    }).catch(()=>{
        res.status(203).json({
            message:"Login Failed!!! :( Invalid credentials"
        })
    })
})

app.get('/',(req, res) => {
    res.send("Estoy fucionando");
});

//Middleware para proteger graphQL

app.use('/graphql',(req,res,next) => {
    const token = req.headers['authorization'];
    try{
        req.user = verify(token)
        next();
    }catch(error){
        res.status(401).json({message:error.message})
    }
})


app.use('/graphql', graphQLHTTP((req,res)=>({
    schema,
    graphiql:true,
    pretty:true,
    context:{
        user:req.user
    }
})))

app.listen(PORT,() => {
    console.log("Estoy arriba");
});

