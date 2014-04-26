var common = require('./common');

var schema = new common.Schema({
	'deviceToken' : {
		'type': String,
		'required': true
	},
	'deviceType' : {
		'type': String,
		'required': true,
		'enum': ['Mac', 'Windows', 'iOS', 'Android']
	},
	'active' : {
		'type': Boolean,
		'required': true
	}
}, {
    collection: 'device'
});

/*

_id: ObjectId("xxx"),
deviceToken: lasdjalsdjiasjdlkiihad....

*/

schema.statics.getAllDevice = function (deviceId, callback) {
	this.find({} , function(err, device) {
		console.log("get all device " + JSON.stringify(device));
		if (err) {
			console.log(err);
			callback(err);
		} else {
			callback(null, device);	
		}
	});
};


var Device = common.mongoose.model('Device', schema);
exports.Device = Device;