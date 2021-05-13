const mongoose = require('mongoose');

const articlesSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
        required: true,
    },
    tags: {
        type: 'string',
        required: true,
    },
    newtags: {
        type: 'string',
        required: true,
    },
    categories: {
        type: 'string',
        required: true,
    },

});

const Articles = mongoose.model("articles", articlesSchema);
module.exports = Articles;