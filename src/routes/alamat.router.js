const express = require('express');
const Controller = require('../controllers/alamat.controller');

const router = express.Router();

router.get('/', Controller.getAlamat);

module.exports = router;