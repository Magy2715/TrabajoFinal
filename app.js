import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

const app = express();
const puerto = 9000;

dotenv.config();

app.listen(puerto, () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`);
});
