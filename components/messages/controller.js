


function addMessage(user, message) {

    return new Promise ((resolve, reject) => {

        if (!user || !message) {

            console.error('[Message Controller] No hay usuario o mensaje');
            return reject('Los datos son incorrectos');

        }

        var fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };

        resolve(fullMessage)
        console.log(fullMessage);

    })
}

module.exports = {

    addMessage,
};