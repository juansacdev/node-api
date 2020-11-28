const store = require('./store')


function addMessages(user, message) {
    return new Promise ((resolve, reject) => {
        if (!user || !message) {
            console.error('[Message Controller] No hay usuario o mensaje');
            return reject('Los datos son incorrectos');
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };
        resolve(fullMessage)
        store.add(fullMessage)
        console.log(fullMessage)
    })
}


function getMessages(filterUser) {
    return new Promise ((resolve, reject) => {
        resolve(store.list(filterUser))
    })
}


function updateMessage(id, message){
    return new Promise ( async (resolve, reject) => {
        if(!id || !message) {
            reject('Invalid data')
            return false;
        }

        const result = await store.update(id, message)
        resolve(result)
    })
}

module.exports = {
    addMessages,
    getMessages,
    updateMessage,
};