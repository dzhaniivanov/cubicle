const Accessory = require('../models/Accessory');

function create(data) {
    let acccessory = new Accessory(data);

    return acccessory.save();

}

function getAll() {
    return Accessory.find().lean();

}

module.exports = {
    create,
    getAll,
}