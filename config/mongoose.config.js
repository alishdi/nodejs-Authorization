const { default: mongoose } = require('mongoose');
const DB_URL = "mongodb://127.0.0.1:27017/authorization";
mongoose.connect(DB_URL).then(
    () => { console.log('server connected to mongodb') },
    (err) => { console.log(err.message) }
)
