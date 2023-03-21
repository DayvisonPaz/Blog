const express   = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const uri = "mongodb+srv://Dayvison:xb6EgwDK97fzZfDt@cluster0.3v8vfkh.mongodb.net/MovieList?retryWrites=true&w=majority"
mongoose.connect(uri);

const Messages = mongoose.model('messages', { name: String });

const app = express();
app.use(cors())


app.get('/', async (req,res)=>{
    const users = await Messages.find()
    const username = users
    console.log(username)
    res.status(200).json(username)
})


app.listen(3000,console.log('Server is running'));