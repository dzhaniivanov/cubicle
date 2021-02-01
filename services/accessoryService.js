const Accessory = require('../models/Accessory');

function create(data) {
    let acccessory = new Accessory(data);

    return acccessory.save();

}

function getAll() {
    return Accessory.find().lean();

}

function getAllWithout(ids) {
    return Accessory.find({ _id: { $nin: ids } }).lean();
}

module.exports = {
    create,
    getAll,
    getAllWithout,
}