const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');


router.post('/',userCtrl.signUp);
router.post('/login',userCtrl.logIn);

router.get('/',userCtrl.getAll);
router.get('/:id',userCtrl.getOne);

module.exports = router;