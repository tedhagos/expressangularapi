let gulp = require('gulp');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let ngAnnotate = require('gulp-ng-annotate');
let sourcemaps = require('gulp-sourcemaps');
let obfuscate = require('gulp-obfuscate');
let watch = require('gulp-watch');
let args = require('yargs').argv;
let util = require('gulp-util');
let del = require('del');

console.log(args);
let prod = args.prod;


gulp.task('script', ['clean:build'],function() {
  console.log('Ready to go');
  return gulp.src('js/**/*.js')
    .pipe(ngAnnotate())
    .pipe(sourcemaps.init())
    .pipe(concat('script.js'))
    .pipe(prod ? uglify() : util.noop())
    .pipe(prod ? obfuscate() : util.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['script'], function() {
  console.log('Default Task running...');
  gulp.watch(['js/**/*.js', 'views/**/*.html'], ['script']);
});

gulp.task('clean:build', function(){
  console.log('cleaning build');
  return del([
    'dist/**/*'
  ]);
});