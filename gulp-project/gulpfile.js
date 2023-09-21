'use-strict';
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rigger = require('gulp-rigger');

var paths = {
    build: {
        html: 'www/',
        js: 'www/js',
        img: 'www/img'
    },
    src: {
        html: './src/index.html',
        js: './src/js/*.js',
        img: './src/img/*.{jpg, png, jpeg}'
    },
    tmp: {
        html: '.tmp/',
        js: '.tmp/js/'
    }
}

// Tạo nhiệm vụ để minify và rigger mã JavaScript
gulp.task('minify-js', function () {
    return gulp.src(paths.src.js) // Đường dẫn đến các tệp nguồn JavaScript
        .pipe(rigger()) // Sử dụng rigger để quản lý các module và tệp nguồn
        .pipe(uglify()) // Sử dụng UglifyJS để tối ưu hóa mã JavaScript
        .pipe(gulp.dest(paths.build.js)); // Thư mục đầu ra cho tệp minified
});

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

gulp.task('html:build', function (done) {
    gulp.src(paths.src.html)
        .pipe(gulp.dest(paths.build.html))
        .on('end', done); // Sử dụng hàm callback done
});

exports.default = defaultTask;
