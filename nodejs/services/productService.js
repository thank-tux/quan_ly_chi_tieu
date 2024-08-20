const Product = require('../models/product')
const getProductsService = async () => {
    try {
      let result = await Product.find({});
      return result;

    } catch (error) {
      console.log(error);
      return null;
    }
};


module.exports= {
    getProductsService}