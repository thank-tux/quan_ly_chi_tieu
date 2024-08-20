const {createCostService, getCostService} = require("../services/costService");
const createCost = async (req, res) => {
    const {eventdate,description,price,category } = req.body ;
    const data = await createCostService(eventdate,description,price,category);
    return res.status(200).json(data);
}
const listCost = async (req, res) => { 
    const data = await  getCostService();
    return res.status(200).json(data);
}

 module.exports = {
    createCost,listCost
 }