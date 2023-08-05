const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();


gulp.task('css', function () {
    return gulp.src(['assets/styles/scss/styles.scss', 'assets/styles/scss/fonts.scss'])
        .pipe(sass())
        .pipe(postcss([
            tailwindcss('./tailwind.config.js'),
            autoprefixer(),
        ]))
        .pipe(gulp.dest('assets/styles'));
});

gulp.task('js', function () {
    return gulp.src('assets/js/src/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('assets/js/'));
});


gulp.task('bsync', function () {
   
    browserSync.init({
        proxy: {
            target: 'http://mysitename.local',
            ws: true
        },
        reloadDelay: 400,
        open: false
    });

    gulp.watch('./**/*.php', gulp.series('css')).on('change', browserSync.reload);
    gulp.watch('assets/styles/scss/**/*.scss', gulp.series('css')).on('change', browserSync.reload);
    gulp.watch('assets/js/src/*.js', gulp.series('js')).on('change', browserSync.reload);

});


gulp.task('default', gulp.parallel('css','js', 'bsync'));
