const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('home',{title:'browse'})
});
router.get('/create', (req, res) => {
    res.render('create',{title:'create'})
});

module.exports = router;