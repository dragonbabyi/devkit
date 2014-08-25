var fs = require('fs');
var path = require('path');

var apps = require('../apps');

var BaseCommand = require('../util/BaseCommand').BaseCommand;

var RegisterCommand = Class(BaseCommand, function (supr) {

  this.name = 'register';
  this.description = "adds the current directory to devkit's list of apps";

  this.exec = function (args, cb) {
    var appPath = process.cwd();
    apps.get(appPath, bind(this, function (err, app) {
      if (err) {
        this.logger.error(err);
      } else {
        this.logger.log('registered', appPath);
      }
      cb && cb(err, app);
    }));
  }

});

module.exports = RegisterCommand;