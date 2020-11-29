// modelo real

const Model  = require('./model');


function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(filterChat) {
    return new Promise ((resolve, reject) => {
        let filter = {};
        if(filterChat !== null) {
            filter = { chat: filterChat };
        }
        Model.find(filter)
            .populate('User')
            .exec((error, populated) => {
                if(error){
                    reject(error)
                    return false
                }
                resolve(populated);
            });
    })
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({ _id: id });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id) {
    Model.deleteOne({ _id: id });
}

module.exports = {
    add: addMessage,
    list: getMessage,
    update: updateText,
    remove: removeMessage,
}
