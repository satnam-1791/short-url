const express = require('express');
const { GenerateUrl, HandleAnalytics } = require('../controllers/url');
const router = express.Router();


router.post('/',GenerateUrl)

router.get('/analytics/:shortId',HandleAnalytics)

module.exports = router