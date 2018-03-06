'use strict';
var grunt = require('grunt');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    app: {
            source: 'src/main/webapp',
            dist: 'src/main/webapp'
    },
    uglify: {
            dist: {
                   options: {
                       compress: true,
                       preserveComments: false,
                       report: 'min'
                   },
                   files: {
                       '<%= app.dist %>/dist/js/vendor-scripts.js': [
                           'bower_components/jquery/dist/jquery.js',
                           'bower_components/angular/angular.js',
                           'bower_components/angular-ui-router/release/angular-ui-router.js'
                      ],
                       '<%= app.dist %>/dist/js/custom-scripts.js': [
                           '<%= app.source %>/js/application.js'
                       ]
                   }
               }
    },
	html2js: {
			  options: {
				base: 'src',
				module: 'myapp.template',
				singleModule: true,
				useStrict: true,
				htmlmin: {
				  collapseBooleanAttributes: true,
				  collapseWhitespace: true,
				  removeAttributeQuotes: true,
				  removeComments: true,
				  removeEmptyAttributes: true,
				  removeRedundantAttributes: true,
				  removeScriptTypeAttributes: true,
				  removeStyleLinkTypeAttributes: true
				},
				rename: function (url) {
                        return url.replace('main/webapp/', '');
                }
			  },
			  main: {
				src: ['<%= app.dist %>/pages/**/*.jsp'],
				dest: '<%= app.dist %>/scripts/template.js'
			  }
		}
});

  // Load the plugin that provides the "uglify" task.
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-html2js');
   grunt.loadNpmTasks('grunt-install-dependencies');
   grunt.registerTask('default', ['uglify:dist', 'html2js']);
};
