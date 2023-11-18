const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchmea = new Schema({
    name: { type: 'string', required: true },
    phoneNumber:Number,
    password:String
},
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('mindpeersusers', newSchmea);