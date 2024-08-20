const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/product');
const cors = require('cors');
const apiRouter = require('./router/api')


const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

// URL kết nối tới MongoDB
const mongoURI = 'mongodb://localhost:27017/quanlychitieu'; // Thay đổi 'mydatabase' bằng tên database của bạn

// Kết nối tới MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Kết nối thành công tới MongoDB');
  })
  .catch((err) => {
    console.error('Lỗi khi kết nối tới MongoDB', err);
  });
  app.set('view engine', 'ejs');

// Route để hiển thị danh sách người dùng


app.get('/', async (req, res) => {
  try {
      const users = await User.find({});
      res.status(200).send(users);
  } catch (err) {
      res.status(500).send(err);
  }
});
app.get('/api', apiRouter );
app.post('/register', apiRouter );
app.post('/login', apiRouter);
app.get('/overview', apiRouter);
app.post('/cost', apiRouter);
app.get('/cost', apiRouter);


//products
app.get('/products', async (req, res) => {
  try {
      const Products = await Product.find({});
      res.status(200).send(Products);
      console.log(Products)
  } catch (err) {
      res.status(500).send(err);
  }
});



// Khởi động server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});