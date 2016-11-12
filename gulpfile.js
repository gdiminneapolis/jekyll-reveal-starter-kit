// task runner -- use this on Windows
'use string';

var gulp = require('gulp');
var help = require('gulp-task-listing');
var cp = require('child_process');
var sync = require('browser-sync');

gulp.task('help', help);
gulp.task('default', help);
gulp.task('build', function () {
    //return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'});
    return cp.execSync('bundle exec jekyll build', {stdio: 'inherit'})
});
gulp.task('serve', ['build'], function(){
  sync.init({server: './_site'});
  gulp.watch('./source/**/*', ['build'])
  gulp.watch('./_site/**/*').on('change', sync.reload)
});

gulp.task('stage', function () {
  return cp.execSync('bundle exec jekyll build --config=_config.yml,_staging.yml', {stdio: 'inherit'})
});

gulp.task('publish', function () {
  return cp.execSync('bundle exec jekyll build --config=_config.yml,_publish.yml', {stdio: 'inherit'})
});
