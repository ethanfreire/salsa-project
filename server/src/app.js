const express = require('express');
const planetsRouter = require('./routes/planets.router');
const cors = require('cors');
const app = express();
console.log('testing')

app.use(cors({
    origin: 'http://localhost:3000',
    
}));
app.use(express.json());
app.use(planetsRouter);

module.exports = app;
