const db = require('mongoose')

db.Promise = global.Promise;
async function connect(URI) {
    // const URI = 'mongodb+srv://db_user_juan:Agudelo200023@cluster0.cw9zl.mongodb.net/db_prueba?retryWrites=true&w=majority';
    await db.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true,})
        .then(() => console.log('[db] Conectada con exito'))
        .catch( error => console.error('[db]', error));
}


module.exports = connect;