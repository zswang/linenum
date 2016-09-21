/*jshint globalstrict: true*/
/*global require*/

'use strict';

var gulp = require('gulp');
var jdists = require('gulp-jdists');
var examplejs = require('gulp-examplejs');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('build', function() {
  return gulp.src(['src/linenum.js'])
    .pipe(jdists({
      trigger: 'release'
    }))
    .pipe(gulp.dest('./'))
    .pipe(uglify())
    .pipe(rename('linenum.min.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('example', function() {
  return gulp.src('src/**.js')
    .pipe(examplejs({
      header: "var linenum = require('../');\n"
    }))
    .pipe(gulp.dest('test'));
});

gulp.task('default', ['build']);