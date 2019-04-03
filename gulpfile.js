'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-snowgem');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
