/* eslint-env node */
module.exports = function(grunt) {
	// load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
	require("load-grunt-tasks")(grunt, {pattern: ["grunt-*", "gruntify-*"]});

	grunt.initConfig({
		eslint: {
			src: ["src/*.js"]
		},

		clean: {
			dist: "dist"
		},

		browserify: {
			dist: {
				options: {
					alias: {
						'canada_census_data': './index.js'
					}
				},
				files: {
					"dist/canada_census_data.js": "index.js"
				}
			}
		},

		uglify: {
			options: {
				sourceMap: true
			},
			all: {
				expand: true,
				cwd: "dist",
				src: "**/*.js",
				dest: "dist",
				ext: ".min.js"
			}
		},
	});
	grunt.registerTask("default", ["eslint", "clean", "browserify", "uglify"]);
};
