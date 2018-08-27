const gulp = require('gulp');
const es6transpiler = require('gulp-es6-transpiler');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const run = require('gulp-run');


gulp.task('transpil', () => {
	return gulp.src('./js/main.js')
		.pipe(es6transpiler().on('error', function (error) {
      console.error(
        'ES6 error on `' + error.fileName + '`:\n' +
        error.message, error.fileName);
    }))
		.pipe(gulp.dest('./dist'));
})

gulp.task('sass', () => {
    return gulp.src('./scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
})

gulp.task('browserSync', () => {
    browserSync({
      server: {
        baseDir: '.'
      },
    })
})

gulp.task('runapp', () => {
    return run('npm run start').exec()
      .pipe(gulp.dest('output'))
      .pipe(browserSync.reload({
        stream: true
      }))
})

gulp.task ('default', ['transpil', 'sass', 'runapp'], () => {
    gulp.watch('./js/*.js', () => {
      gulp.run('transpil');
    });
    gulp.watch('./dist/main.js', () => {
      gulp.run('runapp');
    });
    gulp.watch('./scss/*.scss', () => {
        gulp.run('sass');
    });
})