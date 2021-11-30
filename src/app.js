const express = require("express");
require("./db/conn");
const morgan = require("morgan")
const bookRoute = require('./routes/book')
const authorRoute = require('./routes/author')
const userRoute = require('./routes/user')

const app = express();
const PORT  = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(authorRoute)
app.use(bookRoute)
app.use(userRoute)

app.get("/",(req,res)=>{
  res.send("hello")  
});

app.listen(PORT, ()=> {
    console.log(`Server Running on port ${PORT}`)
});

