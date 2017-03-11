var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
	author:{
		type: String
	},
	content: {
		type: String
	}
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;