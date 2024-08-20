const {getProductsService} = require('../services/productService')
const listProducts = async (req, res) => { 
    const data = await  getProductsService();
    return res.status(200).json(data);
}

module.exports = {
  listProducts
}