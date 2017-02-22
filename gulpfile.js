var minimist = require('minimist');

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins();

var through2 = require('through2');
var args = minimist(process.argv.slice(2));
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task('html', function () {
    console.log("Html Task start.");

    gulp.src('src/**/*.html')
        .pipe($.plumber())
        .pipe($.rename(function (path) {
            path.dirname = "./dist/" + path.dirname;
            path.extname = ".html";
        }))
        .pipe($.if(args.release, $.uglify()))
        .pipe(gulp.dest('./'));
});

gulp.task('scss', function () {
    console.log("SCSS Task start.");

    gulp.src('src/**/*.scss')
        .pipe($.sass({style: 'compact', compass: true}).on('error', $.sass.logError))
        .pipe($.autoprefixer())
        .pipe($.minifyCss({advanced: false}))
        .pipe($.rename(function (path) {
            path.dirname = "./dist/" + path.dirname;
            path.extname = ".css";

        }))
        .pipe(gulp.dest('./'));
});


gulp.task('app', function () {
    console.log("App Task start.");

    gulp.src('src/**/*.js')
    // .pipe($.changed('./'))
        .pipe($.plumber())
        .pipe(through2.obj(function (file, encode, callback) {
            browserify(file.path)
                .transform(babelify, {
                    presets: ['es2015', 'react']
                })
                .bundle(function (err, res) {
                    if (err) {
                        return callback(err);
                    }
                    file.contents = res;
                    callback(null, file)
                });
        }))
        .pipe($.rename(function (path) {
            path.dirname = "./dist/" + path.dirname;
            path.extname = ".js";

        }))
        .pipe($.if(args.release, $.uglify()))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ["app", "html", "scss"]);

gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['app']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/**/*.scss', ['scss']);
});
