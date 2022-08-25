const express = require('express');
const app = express()
const port = 8000
const cors = require('cors')
const fs = require('fs')

app.use(cors());

const product = async (req, res) => {
    try{
        const data = await fs.promises.readFile('./db/product.json', 'utf-8');
        res.status(200).json(JSON.parse(data));
    } catch{
        res.status(400).send('Products not found');
    }
}

const filterName = async (req, res) => {
    try{
        const data = await fs.promises.readFile('./db/product.json', 'utf-8');
        const name = req.query.name;

    } catch{
        res.status(400).send('Products not found');
    }
}

app.get('/product/', product);

//URL
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })