const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');


router.post('/',userCtrl.signUp);
router.post('/login',userCtrl.logIn);


module.exports = router;