const express = require("express");
const cors = require("cors");
const pool = require("./database");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/adduser", (req, res) => {
    const Nombre = req.body["nombre"];
    const Usuario = req.body["usuario"];
    const Contrasena = req.body["contrasena"];
    const Correo = req.body["correo"];

    console.log("nombre:" + Nombre);
    console.log("usuario:" + Usuario);
    console.log("contrasena:" + Contrasena);
    console.log("correo:" + Correo);
    
    const pg = require("pg");

    const insertSTMT = 'INSERT INTO usuario (nombre, usuario, contrasena, correo) VALUES ($1, $2, $3, $4)';
    const values = [Nombre, Usuario, Contrasena, Correo];


    pool.query(insertSTMT, values)
    .then((response) =>{
        console.log("Información Guardada");
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })

    console.log(req.body);
    res.send("Response Received: " + req.body);
});

app.listen(4000, () => console.log("Server on localhost:4000"));