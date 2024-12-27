
//? Express.js 

import express, { Request, Response } from "express";


const app = express();

const port = 3000;

app.get("/", (req: Request, res: Response) => {
      res.send("Hello, Typescript with Express!")
});


app.listen(port,
      () => console.log(`server running on port ${port}`)
);