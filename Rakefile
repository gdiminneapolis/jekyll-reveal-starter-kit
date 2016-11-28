desc "jekyll server with full build"
task :server do |t|
  sh "bundle exec jekyll serve --port #{jekyll_port}"
end
task :default => :server

desc "jekyll server with incremental build"
task :server_inc do |t|
  sh "bundle exec jekyll serve --incremental --port #{jekyll_port}"
end

namespace :build do
  desc "build for staging"
  task :staging do |t|
    sh "bundle exec jekyll build --config=_config.yml,_staging.yml"
  end

  desc "build for publishing"
  task :publish do |t|
    sh "bundle exec jekyll build --config=_config.yml,_publish.yml"
  end
end

def jekyll_port
  @_jekyll_port ||= ENV['JEKYLL_PORT'] || '4000'
end
