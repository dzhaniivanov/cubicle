const Accessory = require('../models/Accessory');

function create(data) {
    let acccessory=new Accessory(data);

    return acccessory.save();

}

module.exports = {
    create,
}