


var gulp = require("gulp");
var sass = require("gulp-sass");




gulp.task("copy-html",function(){
	
	gulp.src("./*.html")
	.pipe(gulp.dest("D:\\Program Files (x86)\\php\\PHPTutorial\\WWW\\underarmour"));

});
gulp.task("copy-js",function(){
	
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\Program Files (x86)\\php\\PHPTutorial\\WWW\\underarmour\\js"));

});

gulp.task("copy-img",function(){
	
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\Program Files (x86)\\php\\PHPTutorial\\WWW\\underarmour\\img"));

});
gulp.task("copy-php",function(){
	
	gulp.src("php/*.php")
	.pipe(gulp.dest("D:\\Program Files (x86)\\php\\PHPTutorial\\WWW\\underarmour\\php"));

});

gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("D:\\Program Files (x86)\\php\\PHPTutorial\\WWW\\underarmour\\css"));

});
gulp.task("watch",function(){
	gulp.watch("./*.html",["copy-html"]);
	gulp.watch("js/*.js",["copy-js"]);
//	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("img/**/*",["copy-img"]);
	gulp.watch("php/*.php",["copy-php"]);
	gulp.watch("sass/*.scss",["sass"]);
});