const { Router } = require('express');
const productService = require('../services/productService');


const router = Router();


router.get('/', (req, res) => {
    let products = productService.getAll();
    res.render('home', { title: 'browse', products })
});
router.get('/create', (req, res) => {
    res.render('create', { title: 'create' })
});

router.get('/details/:productId', (req, res) => {
    console.log(req.params.productId);
    let product = productService.getOne(req.params.productId);
    res.render('details', { title: 'product details', product });

});

router.post('/create', (req, res) => {
    //need to validate inputs
    productService.create(req.body);

    res.redirect('/products');
})

module.exports = router;