import express from 'express';
import routes from './src/routes/stcRoutes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 4000;
var corsOptions = {
    origin:['http://localhost:8080','http://localhost:8081','http://localhost:4200']
};

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/STCdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//bodyparser setup
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req,res) => 
    res.send('Node and express server running on port ${PORT}!')
);

app.listen(PORT, () => 
console.log('Running on server port ${PORT}'));