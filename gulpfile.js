
const browserSync   = require('browser-sync');
const gulp          = require('gulp');
const less          = require('gulp-less');

const settings = {

    servePath:      './src',

    serveRoutes: {
        '/node_modules': './node_modules',
    },

    lessMain:       './src/styles/app.less',
    lessMatch:      ['./src/styles/**/*.less'],
    lessCache:      './src/styles/.cache',
    distLess:       './src/styles'
};


/**
 * Compile Less into CSS
 */
gulp.task('less', () => {

    return gulp.src(settings.lessMain)
        .pipe(less())
        .pipe(gulp.dest(settings.lessCache))
        .pipe(browserSync.reload({ stream: true }));
});


/**
 * Launch local file serve
 */
gulp.task('start', ['less'], () => {

    browserSync({
        server: {
            baseDir  : settings.servePath,
            routes   : settings.serveRoutes,
            index    : 'less.html',
            directory: false
        }
    });

    gulp.watch(settings.lessMatch, ['less']);

    gulp.watch([settings.servePath+'/**/*']).on('change', browserSync.reload);
});

/**
 * Start the application launcher demo
 */
gulp.task('applauncher', () => {

    browserSync({
        server: {
            baseDir  : settings.servePath,
            routes   : settings.serveRoutes,
            index    : 'applauncher.html',
            directory: false
        }
    });

    gulp.watch([settings.servePath+'/**/*']).on('change', browserSync.reload);
});

/**
 * Hypothetical move build resources...
 */
gulp.task('do-build-things', () => {

    // move files to appropriate dist or distribution directory
});