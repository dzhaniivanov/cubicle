const { Router } = require('express');
const productController = require('./controllers/productController');
const homeController = require('./controllers/homeController');
const router = Router();
const accessoryController = require('./controllers/accessoryController');
const authController=require('./controllers/authController');


router.use('/', homeController);
router.use('/auth',authController)
router.use('/products', productController);
router.use('/accessories', accessoryController)
router.get('*', (req, res) => {
    res.render('404')
});
module.exports = router;  