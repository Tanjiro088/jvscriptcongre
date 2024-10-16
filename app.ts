import express from "express";
const app = express();
import { sum } from "./sum";

app.get('/sum/:a/:b', (req, res) => {
   const a = Number(req.params.a); 
   const B = Number(req.params.b); 

  const result = sum (a,b) ; 
  res.send("result" + result)
  })

app.get('/', (req, res)=> {
  res.send('Hola World')
})

app.listen(3000)