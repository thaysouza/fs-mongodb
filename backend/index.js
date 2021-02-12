const connection = require('./config/connection')
const Contato = require('./models/Contato')

const express = require('express'), 
    server = express(),
    cors = require('cors'),
    mysql = require('mysql');


    //conexão com banco de dados
const database = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "fseletro"
})

server.use(cors());
server.use(express.json());

server.get('/',(req,res) => {
    res.end("<html>Hello world</html>")
})


server.get("/msg",async (req,res)=>{
    //res.send("foi")
    const resultado = await Contato.find()

    res.json(resultado)
})

//INSERT
//inseri produtos no banco (nome)
server.post("/msg", async (req, res)=>{
    const { nome , msg } = req.body

    let resultado = await Contato.create({ nome, msg })

    res.json(resultado)
})


server.get('/produtos', (req,res) =>{
    const sql = "SELECT * FROM produtos";
    database.query(sql, (error, results) =>{
       if(error){
           return error;
       }res.json(results);
    })
})



server.listen(3008, ()=>{
    console.log("Server  on")
})