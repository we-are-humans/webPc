var gulp = require("gulp");
var sass = require("gulp-sass");


gulp.task("copy-html",function(){
	gulp.src("./*.html").pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\Pro"));
});

gulp.task("copy-js",function(){
	gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\Pro\\js"));
});

gulp.task("copy-img",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\Pro\\img"));
});

gulp.task("copy-php",function(){
	gulp.src("./*.php").pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\Pro\\php"));
});

gulp.task("copy-css",function(){
	gulp.src("scss/*.scss").pipe(sass()).pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\Pro\\css"));
});

gulp.task("watch",function(){
	gulp.watch("./*.html",["copy-html"]); //.表示当前文件夹
	gulp.watch("js/*.js",["copy-js"]);//第一个参数js文件夹下的js格式的文件；第二个参数表示调用上面对应的执行方法
	gulp.watch("img/**/*",["copy-img"]);
	gulp.watch("php/*.php",["copy-php"]);
	gulp.watch("scss/*.scss",["copy-css"]);
});
