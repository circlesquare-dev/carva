let gulp = require('gulp'),
		plumber = require('gulp-plumber'),
		rename = require('gulp-rename'),
		pug = require('gulp-pug'),
		babel = require('gulp-babel'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		prettyHtml = require('gulp-pretty-html'),
		imagemin = require('gulp-imagemin'),
		cache = require('gulp-cache'),
		postcss = require('gulp-postcss'),
		autoprefix = require('autoprefixer'),
		cssnano = require('cssnano'),
		sorting = require('postcss-sorting'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
	browserSync({
		reloadDelay: 1000,
		scrollProportionally: false,
		open: false,
		ui: false,
		server: {
			baseDir: "dist/"
		}
	});
});

gulp.task('images', function () {
	gulp.src('src/images/**/*')
	.pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
	.pipe(gulp.dest('dist/images/'));
});

gulp.task('html', function () {
	gulp.src('src/pug/pages/*.pug')
	.pipe(plumber({
		errorHandler: function (error) {
			console.log(error.message);
			this.emit('end');
		}
	}))
	.pipe(pug())
	.pipe(prettyHtml())
	.pipe(gulp.dest('dist/'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('styles', function () {
	let rules = require('./css-sorting');
	gulp.src(['src/styles/**/*.sass'])
	.pipe(plumber({
		errorHandler: function (error) {
			console.log(error.message);
			this.emit('end');
		}
	}))
	.pipe(sass())
	.pipe(plumber.stop())
	.pipe(postcss([autoprefix]))
	.pipe(postcss([
			sorting({
				'properties-order': rules
			})
	]))
	.pipe(gulp.dest('dist/styles/'))
	.pipe(postcss([cssnano]))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('dist/styles/'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function () {
	return gulp.src('src/scripts/**/*.js')
	.pipe(plumber({
		errorHandler: function (error) {
			console.log(error.message);
			this.emit('end');
		}
	}))
	.pipe(concat('main.js', {newLine: ';'}))
	.pipe(babel())
	.pipe(plumber.stop())
	.pipe(gulp.dest('dist/scripts/'))
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('dist/scripts/'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('build', ['html', 'images', 'styles', 'scripts'], function () {
});

gulp.task('default', ['browser-sync'], function () {
	gulp.watch("src/pug/**/*.pug", ['html']);
	gulp.watch("src/images/**/*", ['images']);
	gulp.watch("src/styles/**/*.sass", ['styles']);
	gulp.watch("src/scripts/**/*.js", ['scripts']);
});
