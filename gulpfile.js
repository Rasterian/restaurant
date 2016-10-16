var gulp = require('gulp'),
    babel = require('gulp-babel'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    scss = require('gulp-sass'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync');

// Compiling scss to css
gulp.task('scss', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(scss())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Compiling ES6 files to JS
gulp.task('es6', function(){
  browserify({
    entries: 'app/js/es6/main.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('app/js/'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

// BrowserSync task
gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app',
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });
});

// useref task concat and minified the css and js files
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

// optimized images
gulp.task('images', function(){
  return gulp.src('app/images/*.+(jpg|png|gif|svg)')
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('dist/images'))
});

// move fonts to dist
gulp.task('fonts', function(){
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

// clean dist folder
gulp.task('clean:dist', function(){
  return del.sync('dist')
});

// Watching changes
gulp.task('watch', ['browserSync', 'scss'], function(){
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/scss/**/*.scss', ['scss']);
  gulp.watch('app/js/es6/**/*.js', ['es6']);
});

// Build task
gulp.task('build', function(callback){
  runSequence('clean:dist', ['scss', 'es6', 'useref', 'images', 'fonts'], callback)
});

// default task
gulp.task('default', function(callback){
  runSequence(['scss', 'es6', 'browserSync', 'watch'])
});
