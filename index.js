const express = require('express')

const mongoose = require('mongoose')

const app = express()
const port = 2000

app.use(express.json())
app.use(require('./routers/user.routers'))
app.use(require('./routers/twit.routers'))
app.use(require('./routers/comment.routers'))

mongoose.connect( "mongodb+srv://Amir:intocode@cluster0.gzzxb.mongodb.net/twitter?retryWrites=true&w=majority")
.then(() => console.log("Успешно соединились с сервером MongoDB"))
.catch(() => console.log('Ошибка при соединии с MongoDB'))

app.listen(port, () => {
    console.log('Server is working')
})