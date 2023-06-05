const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listschema = new Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    ratings: {
        type: String
    },
    image: {
        type:String
    }
});



const List = mongoose.model('Lists', listschema);

module.exports = List;