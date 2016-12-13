'use strict';
var _ = require('lodash');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay'); // use it to have yeoman say it for you using its "picture"

module.exports = yeoman.Base.extend({
  initializing: function () {
    this.log('Welcome to the ' + chalk.red(this.appname) + ' generator!');
  },

prompting: function () {
    var prompts = [{
      name: 'name',
      message: 'What would you like to call your application?',
      default: 'My Service'
    }];
   return this.prompt(prompts).then(function (answers) {
      this.name = answers.name;
    }.bind(this));
  },
 
  writing: {
	config: function() {
	  this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),{
			name: this.name
		}
      );
    }
  },

  end: function () {
    this.log('I am done with creating your new app. Enjoy it!');
  }

});