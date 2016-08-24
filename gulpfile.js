var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cleanCSS = require('gulp-clean-css');
var minifyçç = require('gulp-minify');
var concat = require('gulp-concat');

gulp.task('less', function() {
  // local development rendering
  return gulp.src('./src/components/**/*.less')
    .pipe(concat('app.css'))
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/'));
});

gulp.task('compress', function() {
  gulp.src('src/components/**/*.js')
    .pipe(concat('app.js'))
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        // exclude: ['tasks'],
        // ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./public/'))
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.less', ['less']); 
});