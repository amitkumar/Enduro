// * ———————————————————————————————————————————————————————— * //
// * 	silent
// *	removes all logging
// * ———————————————————————————————————————————————————————— * //

var silent_action = function () {}

var Promise = require('bluebird')

var logger = require(enduro.enduro_path + '/libs/logger')


silent_action.prototype.action = function () {

	logger.silent()

	return new Promise.resolve()

}


module.exports = new silent_action()