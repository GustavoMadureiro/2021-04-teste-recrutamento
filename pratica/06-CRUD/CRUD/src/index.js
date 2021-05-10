require("dotenv").config({path:".env"})

const ProjectReposirory = require ("./repositories/project_repository")
const express = require("express");
const app = express()
const port = 3000


app.get("/", (req, res) => {
    const projectreposirory = new ProjectReposirory()
    projectreposirory.add()
    return res.status(200).send("concluido")
})

app.post("/gustavo/:name", (req,res)=>{
    const name = req.params.name
    return res.status(200).send(`meu nome é ${name}`) 
})


app.listen(port, () => console.log("sucesso"))

console.log(process.env.CONNECTION_STRING)