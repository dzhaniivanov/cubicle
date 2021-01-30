const path = require('path');
const fs = require('fs/promises');
const productsDb = require('../config/products.json');


module.exports={
    getAll(){
        return productsDb;

    },
    getOne(id){
        return productDb.find(x=>x.id===id);
    },
    create(product){
        
    }
}