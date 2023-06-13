const express = require('express');
const { NotFoundErr, ErrorHandler } = require('./middleware/ErrHandler');
const dotenv = require('dotenv');
const { indexRouter } = require('./router/index.router');

const app = express()
require('./config/mongoose.config')
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(indexRouter);



app.use(NotFoundErr)
app.use(ErrorHandler)

app.listen(process.env.PORT, () => {
    console.log(`server run on port ${process.env.PORT} : http://localhost:3000`);
})