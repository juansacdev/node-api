const mongoose = require('mongoose')

const Schema = mongoose.Schema

//tabla en SQL, collecion en NoSQL
const mySchema = new Schema({
    user: {
        type:String,
        required: true,
    },
    message: String,
    date: Date,
});

//collection name at mongo
const model = mongoose.model('Message', mySchema)
module.exports = model

//model Data base with mongo