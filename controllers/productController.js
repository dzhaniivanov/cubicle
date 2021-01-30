const { Router } = require('express');
const productService = require('../services/productService');
const {validateProduct}=require('./helpers/productHelper');


const router = Router();


router.get('/', (req, res) => {
    let products = productService.getAll(req.query);
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

router.post('/create',validateProduct, (req, res) => {
    /* productService.create(req.body);

    res.redirect('/products'); */

    productService.create(req.body)
        .then(()=>res.redirect('/products'))
        .catch(()=>res.status(500).end())
});




module.exports = router;