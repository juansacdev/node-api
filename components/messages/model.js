const mongoose = require('mongoose')

const Schema = mongoose.Schema

//tabla en SQL, collecion en NoSQL
const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        require: true,
    },
    date: Date,
    file: String,
});

//collection name at mongo
const model = mongoose.model('Message', mySchema)
module.exports = model

//model Data base with mongo