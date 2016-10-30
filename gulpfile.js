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
gulp.task('serve', function(){
    "use strict";
    sync.init({
        server: './_site'
    });
    gulp.watch([
       '*.html',
       '_includes/**.*',
       '_data/**.*',
       '_layouts/**/*',
       '_sass/**.*',
       '_slides/**/*',
       'css/**/*',
       'js/**/*',
       'images/**/*',
       '_config.yml'
   ],
   ['build'])
});