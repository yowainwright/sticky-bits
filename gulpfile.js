var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var purifyCSS = require('gulp-purifycss');
var cssnano = require('gulp-cssnano');
var webserver = require('gulp-webserver');

gulp.task('view', function() {
  gulp.src('')
    .pipe(webserver({
      open: true,
      fallback: 'index.html'
    }));
});

// watch yaml config folder changes
gulp.task('default',function() {
  gulp.watch('', []);
  gulp.watch('', []);
  //gulp.watch('./src/styles/*.scss', ['aware', 'educate', 'populate', 'inform', 'quiz']);
});