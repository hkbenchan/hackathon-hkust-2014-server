var common = require('./common');

var schema = new common.Schema({
	'device' : {
		'type': common.Schema.ObjectId,
		'ref': 'device'
	}
	'publicIP' : {
		'type': String,
		'required': true
	},
	'privateIP' : {
		'type': String,
		'required': true
	}
});

/*

_id: ObjectId("xxx"),
deviceToken: lasdjalsdjiasjdlkiihad....

*/

var DeviceIpAddress = common.mongoose.model('DeviceIpAddress', schema);
exports.DeviceIpAddress = DeviceIpAddress;