var Device = require('../models/device').Device;

module.exports = function (app) {
	
	app.get("/", function (req, res){
		res.status(200).json({ message : "Welcome to Dropit!"});
	});

	app.get("/listAllDevices", function (req, res) {

		Device.getAllDevice("535b6f1a5d3cc0b8cc8cd999", function(err, Device){
			if (!err) {
				res.status(200).json(Device);
			} else {
				console.log("Recevie error in list all devices " + err);
				res.status(500).send();
			}
		})

	});
}