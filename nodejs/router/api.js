const express = require('express');
const {createUser, handleLogin } = require('../controllers/usercontrollers')
const {listProducts}  = require('../controllers/productcontrollers')
const {createCost ,listCost} = require('../controllers/costcontrollers')
const routerAPI = express.Router();

routerAPI.get('/api',(req, res) => {
    return res.send('Welcome to the Home Page');
})
routerAPI.post('/register', createUser);
routerAPI.post('/login', handleLogin );
routerAPI.get('/overview', listProducts);
routerAPI.post('/cost', createCost);
routerAPI.get('/cost', listCost );

// const { getUsersAPI, postCreateUserAPI,
//     putUpdateUserAPI, deleteUserAPI

// } = require('../controllers/apiController')
// routerAPI.get('/users', getUsersAPI);
// routerAPI.post('/users', postCreateUserAPI);
// routerAPI.put('/users', putUpdateUserAPI);
// routerAPI.delete('/users', deleteUserAPI);



module.exports = routerAPI; //export default