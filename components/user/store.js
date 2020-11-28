const { getUsers } = require('./controller');
const Model = require('./model')


function getUsers() {

}


function addUser(user) {
    const myUser = new Model(user)
    return myUser.save();
}



module.exports = {
    add: addUser,
    get: getUsers,
}