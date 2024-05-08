const express = require('express');
const app  = express();
const port = 3000;
const cors = require('cors');

const userRouter = require('./Routers/User');
const schoolRouter = require('./Routers/School');
const playwayRouter = require('./Routers/Playway');
const collegeRouter = require('./Routers/College');
const utilRouter = require('./Routers/Utils');
const reviewRouter= require('./Routers/Review')

app.use(cors({
    origin: ['http://localhost:5173']
}))

//middleware
app.use(express.json());
app.use('/user', userRouter);
app.use('/school',schoolRouter);
app.use('/playway',playwayRouter);
app.use('/college',collegeRouter);
app.use('/util',utilRouter);
app.use('/review',reviewRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
