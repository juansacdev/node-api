// modelo real

const db = require('mongoose')
const Model  = require('./model');

//mongodb+srv://db_user_juan:Agudelo200023@cluster0.cw9zl.mongodb.net/db_prueba?retryWrites=true&w=majority

const URI = 'mongodb+srv://db_user_juan:Agudelo200023@cluster0.cw9zl.mongodb.net/db_prueba?retryWrites=true&w=majority';

db.Promise = global.Promise;
db.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => console.log('[db] Conectada con exito'))
    .catch( error => console.error('[db]', error));


function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(filterUser) {
    let filter = {};
    if(filterUser !== null) {
        filter = { user: filterUser }
    }
    const messages = await Model.find(filter);
    return messages
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id,
    });

    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessage,
    update: updateText,
    // update
    // delete
}
