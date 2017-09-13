import gulp from 'gulp'
import pug from 'gulp-pug'
import less from 'gulp-less'
import minifyCSS from 'gulp-csso'

gulp.task('html', () => {
  return gulp.src('client/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/html'))
})

gulp.task('css', () => {
  return gulp.src('client/templates/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
})

gulp.task('default', [ 'html', 'css' ])
