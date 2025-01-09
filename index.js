import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

//creamos una instancia de express
const app = express();
//Definimos el puerto desde donde se lanzará la app
const port = 3000;
//Establecemos el acceso a los diferentes archivos en la app
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//Middleware 
app.use(express.static(path.join(__dirname, 'index.html')));

//Establecer la ruta principal de la app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

//Lanzamos la app:
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})



