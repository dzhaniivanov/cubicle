const User = require('../models/User');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS, SECRET } = require('../config');
const jwt = require('jsonwebtoken');

const register = async ({ username, password }) => {
    //t0d0:check if user exists in db
    let salt = await bcrypt.genSalt(SALT_ROUNDS);
    let hash = await bcrypt.hash(password, salt);

    const user = new User({ username, password: hash });

    return await user.save();

}

const login = async ({ username, password }) => {
    let user = await User.findOne({ username });

    if (!user) throw { message: 'user not found' };

    let isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw { message: 'password not match' };

    let token = jwt.sign({ _id: user._id, username: user.username }, SECRET)
    return token;


}

module.exports = {
    register,
    login,
}