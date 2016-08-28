var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var jade = require('gulp-jade');
var nodemon = require('gulp-nodemon');


gulp.task('less', function () {
    gulp.src('public/css/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('public/css'));
});

gulp.task('oriless',function(){
    gulp.src('original/css/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('original/css'));
})

gulp.task('jade',function(){
    gulp.src('original/views/*.jade')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('original'));
})
 
gulp.task('nodemon', function () {
  nodemon({
    script: 'app.js',
      ext: 'js',
    env: { PORT:8080 },
    watch:'./',
    ignore:'node_modules/**',
  })
})

gulp.task('watch', function() {
    gulp.watch('original/views/*.jade',['jade']);
    gulp.watch('public/css/*.less', ['less']);
    gulp.watch('original/css/*.less', ['oriless']);

});



gulp.task('default',['nodemon','watch']);