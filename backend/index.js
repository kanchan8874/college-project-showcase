//importing express
const express = require('express');
const ProjectRouter = require('./routers/projectRouter');
const StudentRouter = require('./routers/studentRouter');
const UserRouter = require('./routers/userRouter');
const contactRouter = require('./routers/contactRouter');

const cors = require('cors');

//initializating express
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors({
   origin: ['*']
}));
app.use(express.json());
app.use('/project', ProjectRouter);
app.use('/student', StudentRouter);
app.use('/user', UserRouter);
app.use('/contact', contactRouter);



//accept and process request
app.get('/', (req, res) => {
   res.send('response from express');
});

//start the server
app.listen(port, () => {
   console.log('server started');
});

