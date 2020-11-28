const store = require('./store')


function getUsers(){
    return new Promise ((resolve, reject) => {
        resolve(store.get())
    })
}


function addUser(name) {
    if(!name) {
        return Promise.reject('Invalid Name');
    }
    const user = {
        name
    }
    return store.add(user)
}



module.exports = {
    addUser,
    getUsers
}