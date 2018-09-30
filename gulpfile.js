var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

gulp.task('less', function(){
  return gulp.src('less/style.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Run tasks
gulp.task('default',['less']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            // baseDir: ''
            proxy: "local.dev"
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync','less'], function() {
    gulp.watch('less/style.less', ['less']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
});
