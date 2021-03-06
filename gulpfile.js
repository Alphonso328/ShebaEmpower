const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', gulp.series(function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
}));

// Move JS Files to src/js
gulp.task('js', gulp.series(function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
}));

// Watch Sass & Server
gulp.task('serve', gulp.parallel(['sass'], function() {
    browserSync.init({
        server: "./src"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], gulp.parallel(['sass']));
    gulp.watch("src/*.html").on('change', gulp.parallel(browserSync.reload));
}));

// Move Fonts Folder to src/fonts
gulp.task('fonts', gulp.parallel(function() {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest("src/fonts", "dist/fonts"));
}));

// Move Font Awesome CSS to src/css
gulp.task('fa', gulp.parallel(function() {
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest("src/css", "dist/css"));
}));

gulp.task('default', gulp.series(['js', 'serve', 'fa', 'fonts']));