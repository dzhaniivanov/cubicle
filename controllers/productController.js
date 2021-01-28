const { Router } = require('express');
const productService = require('../services/productService');


const router = Router();


router.get('/', (req, res) => {
    res.render('home', { title: 'browse' })
});
router.get('/create', (req, res) => {
    res.render('create', { title: 'create' })
});

router.get('/details/:productId', (req, res) => {
    console.log(req.params.productId);
    res.render('details', { title: 'product details' });

});

router.post('/create', (req, res) => {
    //need to validate inputs
    productService.create(req.body);

    res.redirect('/products');
})

module.exports = router;