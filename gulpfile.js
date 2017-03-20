const pug = require('gulp-pug');
const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');

const paths = {
  pug: ['./app/views/**/*.pug'],
};

gulp.task('default', ['pug']);
gulp.task('pug', function(done) {
  gulp.src('./app/views/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./src/templates'))
    .on('end', done);
});

gulp.task('less', function () {
  return gulp.src('./app/views/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./src/templates/css/'));
});

gulp.task('watch', function() {  
  gulp.watch(paths.pug, ['pug']);
});