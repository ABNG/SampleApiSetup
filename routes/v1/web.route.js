const express = require('express');
const webController = require('../../controllers/Web.controller');
const router = express.Router();

router.get('/view-receipt', webController.showReceipt);



module.exports = router;