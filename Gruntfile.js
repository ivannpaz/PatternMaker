var sourceFiles = [
    'src/Utils.js',
    'src/RandomColor.js',
    'src/AreaCoordinates.js',
    'src/DrawingFrame.js',
    'src/Plugin.js',
];

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        buildDir: 'dist',
        bundleName: '<%= pkg.name %>',

        uglify: {
            options: {
                banner: [
                    '/**',
                    ' * Package:    <%= pkg.name %>',
                    ' * Build:      <%= grunt.template.today("yyyy-mm-dd") %>',
                    ' * Version:    <%= pkg.version %>',
                    ' */\n'
                ].join('\n'),
                enclose: { 'window.jQuery': '$' }
            },
            js: {
                options: {
                    mangle: false,
                    beautify: true,
                    compress: false
                },
                src: sourceFiles,
                dest: '<%= buildDir %>/<%= bundleName %>.js'
            },
            jsmin: {
                options: {
                    mangle: {
                        except: ['jQuery', '$']
                    },
                    compress: true
                },
                src: sourceFiles,
                dest: '<%= buildDir %>/<%= bundleName %>.min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', []);
    grunt.registerTask('dist', ['uglify']);
};
