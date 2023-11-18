const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchmea = new Schema({
    message:String,
    type : String,
    userId: Schema.Types.ObjectId
},
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('messages', newSchmea);