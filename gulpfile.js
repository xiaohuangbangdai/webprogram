const gulp = require("gulp");
const rename = require("gulp-rename");
const clean = require("gulp-clean-css");
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const cleanfile = require("gulp-clean");
const htmlmin = require("gulp-htmlmin");
const babel = require("gulp-babel");
const connect = require("gulp-connect");
const uglify = require("gulp-uglify");

function swallowError(error) {
    this.emit('end')
}

// gulp.task("minijs", function () {
//     return gulp.src("./src/js/index.js")
//         .pipe(uglify())
//         .pipe(rename({
//             suffix: 'min',
//         }))
//         .pipe(gulp.dest("./dist/minijs"))
// })


gulp.task("minicss", ['sass'], function () {
    return gulp.src("./src/css/region.css")
        .pipe(clean({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: 'min',
        }))
        .pipe(gulp.dest("./dist/minicss"))
});
gulp.task("sass", function () {
    return gulp.src('./src/scss/region.scss')
        .pipe(sass())
        .on('error', swallowError)
        .pipe(gulp.dest('./src/css'))
});

gulp.task('default', ['minicss']);
gulp.task("watch", ['default'], function () {
    gulp.watch("./src/scss/region.scss", ['minicss']);
})












// gulp.task('server', function () {
//     connect.server({
//         root: './',
//         port: 8848,
//         livereload: true
//     });
//     gulp.watch("./src/scss/login.scss", ['minicss']);
// })
