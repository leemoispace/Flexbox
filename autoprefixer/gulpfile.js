var gulp=require('gulp');
var autoprefixer = require('gulp-autoprefixer')

gulp.task('styles',function(cb){
    gulp.src('css/styles.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'));
    cb();
});
// https://coder-coder.com/fix-gulp-error-following-tasks-not-complete-signal-async-completion/



gulp.task('watch',function(){
    gulp.watch('css/styles.css',['styles']);

});