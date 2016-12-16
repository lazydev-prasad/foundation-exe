var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
           .pipe(sass({ errorLogToConsole: true }))
           .pipe(gulp.dest('./public/css'))
           .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({

        server: {
            baseDir: './public'
        }
    });

    gulp.watch('./sass/*.scss',['sass']);
    gulp.watch('./public/**/*').on('change', browserSync.reload);
});


gulp.task('default', ['serve']);

