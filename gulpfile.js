'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-vidulum');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
