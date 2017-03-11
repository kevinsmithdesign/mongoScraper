var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comments = require("./comments.js");

var ArticleSchema = new Schema({
	title:{
		type:String
	},
	img_url:{
		type:String
	},
	link:{
		type:String
	},
	author:{
		type:String
	},
	author_url:{
		type:String
	},
	date:{
		type: Date,
		default: Date.now
	},
	comments:[{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}]
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;