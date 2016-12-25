var gulp = require('gulp');
var rename = require("gulp-rename");
var postcss = require('gulp-postcss');
var pxtorem = require('postcss-pxtorem');
var shortColor = require('postcss-short-color');
var precss = require('precss');
var cssnano = require('cssnano');

gulp.task('default', function() {
  // place code for your default task here
  console.log('hello from gulp');
});

gulp.task('css', function () {
  return gulp.src('html/css/*.css')
  .pipe(postcss([
    precss,
    shortColor,
    pxtorem]))
  .pipe(gulp.dest('dist'))
});

gulp.task('minifycss', function() {
  return gulp.src('dist/style.css')
  .pipe(rename('dist/min/min.style.css'))
  .pipe(postcss([cssnano]))
  // rename via string
  .pipe(gulp.dest('dist'))
  
})

// gulp.task('css', function () {
//     return gulp.src('./css/src/*.css').pipe(
//         postcss([
//             require('precss')({ /* options */ })
//         ])
//     ).pipe(
//         gulp.dest('./css')
//     );
// });