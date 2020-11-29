const store = require('./store')


function addMessages(chat, message, file) {
    return new Promise ((resolve, reject) => {
        if (!chat || !message) {
            console.error('[Message Controller] No hay chat o mensaje');
            reject('Los datos son incorrectos');
            return false;
        }
        let fileURL;
        if(file) {
            fileURL = 'http://localhost:3000/app/files/' + file.filename;
        }
        const fullMessage = {
            chat: chat,
            message: message,
            date: new Date(),
            file: fileURL,
        };
        resolve(fullMessage)
        store.add(fullMessage)
        console.log(fullMessage)
    })
}


function getMessages(filterChat) {
    return new Promise ((resolve, reject) => {
        resolve(store.list(filterChat))
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


function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if(!id) {
            reject('Id invalido');
            return false;
        }
        store.remove(id)
            .then(() => resolve())
            .catch(error => reject(error));
    });
}

module.exports = {
    addMessages,
    getMessages,
    updateMessage,
    deleteMessage,
};