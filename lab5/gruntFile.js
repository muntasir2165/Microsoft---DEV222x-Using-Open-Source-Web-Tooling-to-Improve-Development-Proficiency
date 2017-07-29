module.exports = function (grunt) {
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {},
            build: {
                src: 'styles.scss',
                dest: 'css/styles.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');

    // grunt.loadNpmTasks('load-grunt-tasks');

    grunt.registerTask('default', ['sass']);

};
