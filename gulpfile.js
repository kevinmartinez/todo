var gulp = require('gulp');
var rename = require("gulp-rename");
var postcss = require('gulp-postcss');
var pxtorem = require('postcss-pxtorem');
var shortColor = require('postcss-short-color');
var precss = require('precss');
var cssnano = require('cssnano');
var browserSync = require('browser-sync').create();

// browserSync with some default settings
gulp.task('serve', ['css'], function() {
  
  browserSync.init({
    server: './html'
  });
  gulp.watch('html/css/partials/*.css', ['css']);
  gulp.watch('html/*.html').on('change', browserSync.reload);
});

// Process PostCSS
gulp.task('css', function () {
  return gulp.src('html/css/*.css')
  .pipe(postcss([
    precss,
    shortColor,
    pxtorem]))
  .pipe(gulp.dest('html/test'))
  .pipe(browserSync.stream());
});

// Optimize CSS file size
gulp.task('minifycss', function() {
  return gulp.src('dist/style.css')
  .pipe(rename('dist/min/min.style.css'))
  .pipe(postcss([cssnano]))
  // rename via string
  .pipe(gulp.dest('dist'))
});

// default task
gulp.task('default', ['serve']);