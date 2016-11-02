// task runner -- use this on Windows
'use string';

var gulp = require('gulp');
var help = require('gulp-task-listing');
var cp = require('child_process');
var sync = require('browser-sync');
var repos = {
  staging: {
    // TODO: figure out a way to pull this from the environment
    url: 'git@github.com:tamouse/jekyll-reveal-starter-kit.git',
    branch: 'gh-pages'
  }
};
var buildDir = '_site';


gulp.task('help', help);
gulp.task('default', help);
gulp.task('build', function () {
    //return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'});
    return cp.execSync('bundle exec jekyll build', {stdio: 'inherit'})
});
gulp.task('serve', ['build'], function(){
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

// TODO: create a gulp task to prepare the _site directory for use in uploading to gh-pages
//    git init
//    git remote add repos.staging.branch repos.staging.url
//    git checkout --orphan repos.staging.branch

gulp.task('stage:build', function () {
  //return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'});
  return cp.execSync('bundle exec jekyll build --config=_config.yml,_staging.yml', {stdio: 'inherit'})
});
gulp.task('stage:push', function () {
  var cmd = 'cd ' + buildDir + ' && ' +
	    'git add -A &&' +
	    'git commit -m staged && ' +
	    'git push -f && ' +
	    'cd ..';
  return cp.execSync(cmd, {stdio: 'inherit'} );
});
gulp.task('stage', ['stage:build', 'stage:push'], function () {
  console.log('pushed to staging')
});

// TODO: replicate staging for publishing on GDI org
