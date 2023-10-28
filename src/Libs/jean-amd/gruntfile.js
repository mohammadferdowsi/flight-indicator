/* jshint ignore:start */
// jscs:disable
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.initConfig({
        clean: {
            build: {
                src: ['dist/**/*.js']
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true, src: ['src/Amd.js'], dest: 'dist', filter: 'isFile', flatten: true, rename: function (dest, src) {
                            return dest + '/jean-amd.js';
                        }
                    },
                ],
            },
        },
        uglify: {
            my_target: {
                options: {
                    compress: {
                        drop_console: true
                    }
                },
                files: {
                    'dist/jean-amd.min.js': ['src/Amd.js']
                }
            }
        }
    });
    grunt.registerTask('default', [
        "clean",
        "copy",
        "uglify"
    ]);

};