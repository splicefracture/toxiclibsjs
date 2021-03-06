/*
 
 Builds AMD -> stand-alone single .js file

 This r.js build file uses the AMD modules, wraps them in a closure 
 with a barebones require() and define() function (almond), places all classes 
 into one file and attaches them to global 'toxi' object

*/
({
	appDir: "./",
	baseUrl: "../../lib/",
	dir: "../min",
	findNestedDependencies: true,
	optimize: 'none',
	out: "../../build/toxiclibs.js",
	paths: {
		almond: '../utils/almond/almond',
		almondSettings: '../utils/almond.settings'
	},
	include: [
		'almond',
		'almondSettings',
		'toxi'
	],
	wrap: {
		start: "//v0.1.1 toxiclibs.js (http://haptic-data.com/toxiclibsjs)\nvar toxi = {};\n(function(){\n",
		end: "toxi = require('toxi'); }())\n"
	}
})