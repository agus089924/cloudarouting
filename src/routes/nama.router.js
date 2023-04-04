const express = require('express');
const Controller = require('../controllers/nama.controller');

const router = express.Router();

router.get('/', Controller.getNama);

module.exports = router;