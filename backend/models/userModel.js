//object -> schema in MongDB user in collections
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: Boolean},
    password: {type: String, required: Boolean}
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;


//backend setup and login API