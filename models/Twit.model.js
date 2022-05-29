const { default: mongoose } = require("mongoose");

const twitSchema = mongoose.Schema({
    head: String,
    text: String, 
    likes: [{
        ref: 'User',
        type: mongoose.SchemaTypes.ObjectId
    }]
})

const Twit = mongoose.model('Twit',twitSchema)
module.exports = Twit