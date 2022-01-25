const mongoose = require('mongoose');

const articleModel = new mongoose.Schema({

    title: string,
    author : string,
    body: string,
    date: {type: Date, Date.now},
    especial: Boolean,
    resume: {
        content: string,
        author: string
    }

});

module.exports = articleModel;