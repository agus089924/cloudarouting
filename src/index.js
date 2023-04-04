require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const userRouter = require('./routes/user.router')
const alamatRouter = require('./routes/alamat.router')
const namaRouter = require('./routes/nama.router')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/user', userRouter)
app.use('/alamat', alamatRouter)
app.use('/nama', namaRouter)
app.listen(process.env.SERVER_PORT, () => {console.log('Server Running' + process.env.SERVER_PORT)});
