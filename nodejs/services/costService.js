
const cost = require('../models/cost')
const createCostService = async (eventdate,description,price,category) => {
    try {
      
      let result = await cost.create({
        eventdate: eventdate,
        description: description,
        price: price,
        category: category

      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
const getCostService = async () => {
    try {
      let result = await cost.find({});
      return result;

    } catch (error) {
      console.log(error);
      return null;
    }
};

module.exports = {
    createCostService,getCostService
  }