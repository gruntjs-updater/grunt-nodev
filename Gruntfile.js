module.exports = function(grunt) {
  grunt.initConfig({
    nodev: {
      prod: {
        options: {
          file: 'test/server.js',
          args: ['production'],
          ignoredFiles: ['README.md', 'node_modules/**'],
          // watchedExtensions: ['js', 'coffee'],
          watchedFolders: ['test', 'tasks'],
          debug: false,
          delayTime: 1
        }
      },
      exec: {
        options: {
          file: 'test/test.txt',
          exec: 'touch'
        }
      }
    },
    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'nyan'
      },
      all: {
        src: ['test/**/*.js']
      },
      test1: {
        src: ['test/**/test1.js']
      },
      test2: {
        src: ['test/**/test2.js']
      }
    }
  });
  grunt.registerTask('default', ['nodev']);
  grunt.registerTask('test', ['simplemocha']);
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadTasks('tasks');
};
