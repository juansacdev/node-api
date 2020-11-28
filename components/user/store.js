const Model = require('./model')


function getUsers() {
    return Model.find();
}


function addUser(user) {
    const myUser = new Model(user)
    return myUser.save();
}



module.exports = {
    add: addUser,
    get: getUsers,
}