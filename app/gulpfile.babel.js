import gulp from 'gulp';
import babel from 'gulp-babel';
// import electron from 'gulp-electron';
import del from 'del';

import pJSON from './package.json';

gulp.task('clean', () => del('lib'));
gulp.task('babel', ['clean'], () => gulp.src('src/**/*.js').pipe(babel()).pipe(gulp.dest('lib')));
gulp.task('html', ['clean'], () => gulp.src('src/**/*.html').pipe(gulp.dest('lib')));

gulp.task('build', ['babel', 'html']);