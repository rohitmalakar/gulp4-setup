const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

// for js
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

// for js es6 compiler
const babel = require('gulp-babel');


// for sass to css
function style(){
	return gulp.src('./scss/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({}))
	.pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  }))
	.pipe(cleanCss())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./css/'))
	.pipe(browserSync.stream());
}
exports.style = style;

// for js
function script(){
	return gulp.src([
			'./js/customizer.js',
			'./js/navigation.js',
			'./node_modules/popper.js/dist/popper.js',
			'./node_modules/bootstrap/dist/js/bootstrap.min.js'
		])
		.pipe(sourcemaps.init())
		.pipe(babel({
      presets: ['@babel/env']
  	}))
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/js'));
}
exports.script = script;

// watch
function watch(){
	//initialize browsersync
  browserSync.init(style, {
  //browsersync with a php server
  proxy: "http://localhost/wordpress_starter",
  notify: true
  });

	gulp.watch('./scss/**/*.scss', style);
	gulp.watch('./*.php').on('change', browserSync.reload);
	gulp.watch('./js/**/*.js', script);
	gulp.watch('./dist/js/**/*.js').on('change', browserSync.reload);
}
exports.watch = watch;


var build = gulp.parallel(watch);
gulp.task('default', build);