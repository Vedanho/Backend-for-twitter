const mongoose =require('mongoose')

const commentSchema = mongoose.Schema ({
    text: String,
    user:{
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    },
    twit: {
        ref: "Twit",
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment  