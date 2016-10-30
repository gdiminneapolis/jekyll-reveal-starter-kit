require 'yaml'
require 'erb'

desc "jekyll server with full build"
task :server do |t|
  sh "bundle exec jekyll serve --port #{ENV["JEKYLL_PORT"]}"
end
task :default => :server

desc "jekyll server with incremental build"
task :server_inc do |t|
  sh "bundle exec jekyll serve --incremental --port #{ENV["JEKYLL_PORT"]}"
end

desc "build and push to staging"
task :stage => ['stage:build', 'stage:push']

namespace :stage do
  desc "build staging"
  task :build do |t|
    puts "Staging baseurl: #{jekyll_staging_config["baseurl"]}"
    sh "bundle exec jekyll build --config=_config.yml,_staging.yml"
  end
  desc "push staging"
  task :push do |t|
    Dir.chdir(stage_destination) do |site|
      unless Dir.exists?(".git")
        initialize_github_pages
      end
      push_to_gh_pages
    end
  end
end

desc "build and push to production"
task :publish => ['publish:build', 'publish:push']

namespace :publish do
  desc "build production"
  task :build do |t|
    sh "bundle exec jekyll build --config=_config.yml,_publish.yml"
  end
  desc "push to production"
  task :push do |t|
    Dir.chdir(publish_destination) do |site|
      unless Dir.exists?(".git")
        initialize_github_pages
      end
      push_to_gh_pages
    end
  end
end

################################################################################
# helper methods
################################################################################

def push_to_gh_pages
  sh "git add --all && git commit -m '#{Time.now.iso8601}' && git push origin gh-pages"
end

def initialize_github_pages
  sh "git init && git remote add origin #{get_remote} && git checkout --orphan gh-pages" do |ok, result|
    if ok
      sh "git pull origin gh-pages" do |ok, result|
        unless ok
          FileUtils.touch(".keep")
          sh "git add .keep && git commit -m 'empty' && git push -fu origin gh-pages"
        end
      end
    end
  end
end

def get_remote
  @_git_remote ||= `git remote -v | grep origin | head -1 | cut -f 2 | cut -d ' '  -f 1`.chomp
end

def source
  @_source ||= jekyll_config["source"] || "source"
end

def destination
  @_desitnation ||= jekyll_config["destination"] || "_site"
end

def stage_destination
  @_stage_destination ||= jekyll_staging_config["destination"] || "_site"
end

def publish_destination
  @_publish_destination ||= jekyll_publish_config["destination"] || "publish"
end

def jekyll_config
  @_jekyll_config ||= from_yaml("_config.yml")
end

def jekyll_staging_config
  @_jekyll_staging_config ||= from_yaml("_staging.yml")
end

def jekyll_publish_config
  @_jekyll_publish_config ||= from_yaml("_publish.yml")
end

def from_yaml(filename)
  YAML.load(
    ERB.new(
      File.read(filename)
      ).
    result
    )
end
