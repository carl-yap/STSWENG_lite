const mongoose = require('mongoose')
const User = require('./schemas/User')
const Progress = require('./schemas/Progress')
const Dialogue = require('./schemas/Dialogue')
const Pet = require('./schemas/Pet')

// Connect to MongoDB
mongoose
    .connect('mongodb://127.0.0.1:27017/stsweng_lite')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

