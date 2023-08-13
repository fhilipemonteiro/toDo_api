const { Router } = require('express');
const AccountController = require('../../controllers/accounts/AccountController');

const router = Router();

router.post('/accounts/signup', AccountController.signup);

module.exports = router;
