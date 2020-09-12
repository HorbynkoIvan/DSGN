module.exports = function () {
    $.gulp.task('copy', function () {
        return $.gulp.src(
            [
                'assets/fonts/**/*.{woff,woff2}',
                'assets/img/**',
                '*.html'
            ],
            {base: '.'}
        )
            .pipe($.gulp.dest('build'))// create folder and put file there
    })
}