const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MuridSchema = new Schema({
    Muridname: {
        nama: String,
        kursus: String,
        status: {
            type: Boolean,
            default: false
        }
    },
}, {
    timestamp: true,
});

const Murid = mongoose.model('Murid', MuridSchema);

module.exports = Murid;