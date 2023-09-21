
'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    gls = require('gulp-live-server');

var paths = {
    build: {
        html: 'www/',
        js: 'www/js/',
        img: 'www/img'
    },
    src: {
        html: './src/index.html',
        js: './src/js/index.js',
        img: './src/img/*.{jpg, png, jpeg}'
    },
    tmp: {
        html: '.tmp/',
        js: '.tmp/js/',
        img: '.tmp/img'
    }
}

gulp.task('js:dev', function () {
    return gulp.src(paths.src.js)
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest(paths.tmp.js));
});

gulp.task('html:dev', function (done) {
    gulp.src(paths.src.html)
        .pipe(gulp.dest(paths.tmp.html))
        .on('end', done);
});

gulp.task('img:dev', function (done) {
    gulp.src(paths.src.img)
        .pipe(gulp.dest(paths.tmp.img))
        .on('end', done);
});

gulp.task('live', () => {
    var server = gls.static('.tmp', 8080);
    server.start();
    gulp.watch(['./www/js/classes/**/*.js', './www/js/app.js'], function (file) {
        gulp.src(paths.src.js)
            .pipe(rigger())
            .pipe(gulp.dest(paths.tmp.js));
    });
});

// Tạo nhiệm vụ để minify và rigger mã JavaScript
gulp.task('js:build', function () {
    return gulp.src(paths.src.js) // Đường dẫn đến các tệp nguồn JavaScript
        .pipe(rigger()) // Sử dụng rigger để quản lý các module và tệp nguồn
        .pipe(uglify()) // Sử dụng UglifyJS để tối ưu hóa mã JavaScript
        .pipe(gulp.dest(paths.build.js)); // Thư mục đầu ra cho tệp minified
});


gulp.task('html:build', function (done) {
    gulp.src(paths.src.html)
        .pipe(gulp.dest(paths.build.html))
        .on('end', done);
});

gulp.task('img:build', function (done) {
    gulp.src(paths.src.img)
        .pipe(gulp.dest(paths.build.img))
        .on('end', done);
});

gulp.task('dev', gulp.series(
    'js:dev',
    'img:dev',
    'html:dev',
    'live'
));

gulp.task('make', gulp.series(
    'js:build',
    'html:build',
    'img:build'
));