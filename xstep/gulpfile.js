var gulp=require("gulp");
//拷贝各个文件
gulp.task("copy-html",async ()=>{
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\xstep"));
});

gulp.task("copy-css",async ()=>{
	gulp.src("css/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\xstep\\css"));
});

gulp.task("copy-js",async ()=>{
	gulp.src("js/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\xstep\\js"));
});

gulp.task("copy-img",async ()=>{
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\xstep\\img"));
});

gulp.task("copy-video",async ()=>{
	gulp.src("video/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\xstep\\video"));
});

gulp.task("copy-php",async ()=>{
	gulp.src("*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\xstep"));
});

gulp.task("copy-scss",async ()=>{
	gulp.src("*.scss").pipe(gulp.dest("D:\\phpStudy\\WWW\\xstep"));
});

//监听
gulp.task("watch-all",async ()=>{
	gulp.watch("*.html",async ()=>{
		gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\xstep"));
	});
	gulp.watch("css/**/*",async ()=>{
		gulp.src("css/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\xstep\\css"));
	});
	gulp.watch("js/**/*",async ()=>{
		gulp.src("js/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\xstep\\js"));
	});
	gulp.watch("img/**/*",async ()=>{
		gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\xstep\\img"));
	});
	gulp.watch("video/**/*",async ()=>{
		gulp.src("video/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\xstep\\video"));
	});
	gulp.watch("*.php",async ()=>{
		gulp.src("*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\xstep"));
	});
	gulp.watch("*.scss",async ()=>{
		gulp.src("*.scss").pipe(gulp.dest("D:\\phpStudy\\WWW\\xstep"));
	});
});
