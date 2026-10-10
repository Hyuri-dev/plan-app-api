import express, { type Request, type Response } from "express";


const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    const msj = "api corriendo en el puerto " + port +"LISTOOOOOOO";
    res.json({msj})
})

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})
