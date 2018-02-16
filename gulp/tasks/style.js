var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
  //su errore ficiamo a gulp di finire l attivita` specificata senza uscire dalla modalita` watch
  .on('error', function(errorInfo){
  	//logga nella console info utili per capire dove e stato l errore
  	console.log(errorInfo.toString());
  	//questo permette di specificare quale errore vogliamo portare a termine
  	this.emit('end');

  })
  .pipe(gulp.dest('./app/temp/styles'));
});
