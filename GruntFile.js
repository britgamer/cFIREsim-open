module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        watch: {
            js: {
                files: [
                    'js/*.js',
                    'tests/*.js'
                ],
                tasks: ['jasmine:all']
            }
        },
        jasmine: {
            all: {
                src: [
                    'js/*.js'
                ],
                options: {
                    'specs': 'tests/*.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};