const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Defining the schema of the url_mapping Collection
var url_map_schema = new Schema({
    _id: { type: String, required: [true,"Short URL can't be NULL"] },
    //short_url: { type: String, required: [true,"Short URL can't be NULL"] },
    original_url: { type: String, required: [true,"Original URL can't be NULL"] },
    visits: Number
});

//Defining the schema of the url_mapping Collection
var url_stats_schema = new Schema({
    short_url: { type: String, required: [true,"Short URL can't be NULL"] },
    no_of_clicks: { type: Number, required: [true,"no_of_clicks can't be NULL"] },
});

//Creating the mongoose Model which acts a constructor
var Url_map = mongoose.model('url_map',url_map_schema,'url_mappping');

module.exports = Url_map;