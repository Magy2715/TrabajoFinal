import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import conexionMongo from './src/config/db.js';

const app = express();
const puerto = 9000;

dotenv.config();

conexionMongo()

const rutapublica = path.join(process.cwd(), "Public");
app.use(express.static(rutapublica));

app.use(express.json());

app.get('/',(req,res) => {
    res.sendFile(path.join(rutapublica, 'index.html'))
});

app.listen(puerto, () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`);
});
