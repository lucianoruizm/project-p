// const fs = require('fs')

// const home = async (req, res) => {
//     try{
//         const data = await fs.promises.readFile('./db/product.json', 'utf-8');
//         let productDataJson = JSON.parse(data);
//         res.status(200).json({productDataJson});
//     } catch{
//         res.status(400).send('Products not found');
//     }
// }

// module.exports = {home}