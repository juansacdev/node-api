// modelo real

const { model } = require('mongoose');
const db = require('mongoose')
const Model  = require('./model');

//mongodb+srv://db_user_juan:Agudelo200023@cluster0.cw9zl.mongodb.net/db_prueba
//mongodb+srv://db_user_juan:Agudelo200023@cluster0.cw9zl.mongodb.net/db_prueba?retryWrites=true&w=majority

const URI = 'mongodb+srv://db_user_juan:Agudelo200023@cluster0.cw9zl.mongodb.net/db_prueba?retryWrites=true&w=majority';

db.Promise = global.Promise;
db.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => console.log('[db] Conectada con exito'))
    .catch( error => console.error('[db]', error));

// const list = []

function addMessage(message) {
    // list.push(message)
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage() {
    // return list
    const messages = await Model.find();
    return messages
}

module.exports = {
    add: addMessage,
    list: getMessage,
    // get
    // update
    // delete
}
