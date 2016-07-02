var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');

gulp.task('scripts', function() {

  gulp.src([
  	'node_modules/qunitjs/qunit/qunit.js',
    'src/javascript/package-only/test.js',
    'src/javascript/package-only/example-nav.js'
  ])
    .pipe(concat('example.js'))
    .pipe(gulp.dest('src/javascript/package-only/'));

  gulp.src([
    'src/javascript/sticky-bits.js'
  ])
    .pipe(gulp.dest('src/'));

});

gulp.task('styles', function() {
    return gulp
      .src('src/styles/*.scss')
      .pipe(sassGlob())
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css/'));
});

gulp.task('view', function() {
  gulp.src('')
    .pipe(webserver({
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('default',function() {
  gulp.watch('src/javascript/**/*.js', ['scripts']);
  gulp.watch('src/styles/**/*.scss', ['styles']);
});