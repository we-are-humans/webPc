let gulp = require("gulp");
let sass = require("gulp-sass");
let clean = require("gulp-clean-css");

let del = require("del");
let path = require("path");
gulp.task("copy-html", function () {
    return gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\jd"))
})
gulp.task("compile-scss", function () {
    return gulp.src("scss/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("G:\\jd\\css"))

})
gulp.task("copy-css", function () {
    return gulp.src("css/*.css").pipe(clean())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\jd\\css"));
})
gulp.task("copy-img",function(){
    gulp.src("img/*.{jpg,png}").pipe(gulp.dest("D:\\phpStudy\\WWW\\jd\\img"));
})
gulp.task("copy-js",function(){
     gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\jd\\js"))
})
gulp.task("watchall", function () {
    return gulp.watch("*.html", gulp.series("copy-html")),
           gulp.watch("scss/*.scss", gulp.series('compile-scss')),
           gulp.watch("css/*.css",gulp.series("copy-css")),
           gulp.watch("img/*.{jpg,png}",gulp.series("copy-img")),
           gulp.watch("copy-js",gulp.series("copy-js"))



})