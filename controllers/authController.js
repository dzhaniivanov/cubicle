const { Router } = require('express');
const router = Router();
const authService = require('../services/authService');
const {COOKIE_NAME} =require('../config')


router.get('/login', async (req, res) => {
    res.render('login')


});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        let token = await authService.login({ username, password });
        res.cookie(COOKIE_NAME,token);
        res.redirect('/products');
    } catch (error) {
        res.render('login', { error })
    }


});

router.get('/register', (req, res) => {
    res.render('register');

});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    if (password !== repeatPassword) {
        res.render('register', { message: 'passwords dont match' });
        return;
    }
    try {
        let result = await authService.register({ username, password });
        console.log(result);
        res.redirect('/auth/login')

    } catch (error) {
        res.render('register', { error })
    }
});

module.exports = router;