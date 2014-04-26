var mongoose = require('mongoose');

exports.mongoose = mongoose;
exports.Schema = mongoose.Schema;

exports.concatJson = function (o1, o2) {
	for (var key in o2) {
		o1['passjson'][key] = o2[key];
	}

	return o1;
};