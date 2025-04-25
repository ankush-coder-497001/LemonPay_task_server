require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//middleware
app.use(cors());
app.use(express.json());



//mongoose connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//import routes
const userRoute = require('./routes/user.route');
const taskRoute = require('./routes/task.route');

//use routes
app.use('/api/user', userRoute);
app.use('/api/task', taskRoute);


//start the server
const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})