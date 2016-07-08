var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    return gulp
      .src('src/styles/sticky-bits.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css/'));
});


gulp.task('default',function() {
  gulp.watch('src/styles/sticky-bits.scss', ['styles']);
});