
var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'); //new way to write variables

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task.");   //when you create a task the first one is the name the second the function
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});


//we create a task named watch 

gulp.task('watch', function() {

	//it uses the gulp plug-in watch the first argument is the file to watch the second the action in this case is start the
	//task named 

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});