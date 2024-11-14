const express = require('express')
const fs = require("fs").promises
const cors = require('cors');
const app = express()
const port = 3000

app.use(cors());

let jsonData;

 async function main(){
  DATA= await fs.readFile("C://Users//manis//OneDrive//Desktop//Temp//react//Quiz app//Backend//Questions.JSON","utf-8",(err, data)=>{
  });
 jsonData = JSON.parse(DATA);

}

main();

app.get("/",(req,res)=>{
  res.json(jsonData)
})



app.get('/:id', (req, res) => {
  console.log("backend hittted")
  const {id}=req.params;
  res.send(jsonData[id-1])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})