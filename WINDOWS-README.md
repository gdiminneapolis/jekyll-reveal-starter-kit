# Instructions for Windows Users

These are additional instructions for those of you who run on Windows, 
and the commands don't quite work.

## Prerequisites

### Ruby

Ruby in general presents a few problems on Windows, but most are 
surmountable.

#### Getting Ruby

Install latest ruby **and** devkit from http://rubyinstaller.com. 
Follow the instructions on that site.
I suggest you install the devkit in `C:\RubyDekKit`.
Make sure to both initialize and install the devkit.

#### Fixing the problem with bad certificates

You will likely run into a problem the first time you try to get
a "gem" from the rubygems.org site. This is a well-known problem
in the ruby community, but no one seems to want to fix it once
and for all.

See https://gist.github.com/luislavena/f064211759ee0f806c88 for a long
explanation and for what to do about it in general. Specifically,
if you are using Ruby version 2.3.1, you need to download this file:

    https://rubygems.org/gems/rubygems-update-2.6.7.gem

Assuming you save it to your `Downloads` folder, then from the 
command line, run:

    gem install --local C:\Users\YOURUSER\rubygems-update-2.6.7.gem

substituting your actual user name for 'YOURUSER' of course.

#### Install necessary Gems

You will need a couple of gems to make this work:

    gem install bundler
    gem install jekyll

### Node

Node will be used to actually perform the operations and tasks
that were being done by the ruby `rake` command on other platforms.

Download and Install node from the https://nodejs.org/en/ site.
Install some packages globally:

* gulp

## Initializing the project

Instead of just using Ruby, Windows users also have to use Node.js. 
In addition, the `setup.sh` script does not work on windows, 
so the steps need to be done manually. 
(At least until someone [contributes](CONTRIBUTING_GUIDELINES.md) 
a `bat` or powershell script!)

### initialize the local repository

    $ git init
    
### add the reveal.js submodule

    $ git submodule add https://github.com/gdiminneapolist/reveal.js.git reveal.js

### Install all the rest of the project Ruby neeeds:

    bundle install

Don't bother with the `bundle binstubs` stuff in `setup.sh` as it won't
work in Windows anyway.

### Install all the rest of the project's Node needs:

    npm install

### Check installation

At this point, you should have enough to be able to throw up
a set of default slides and see that everything is working.

    gulp serve

will launch a watcher to look for any changes you make to slides
and run jekyll on the project and update the displayed images
in the browser.

## Creating the new slide repository on Github

While Mac users get to work with `hub`, Windows users have to do things 
the old-fashioned way by creating the empty repository on GitHub and 
setting the remote origin by hand.

GUI tools such as Github Desktop for Windows or Sourcetree can help if 
you are uncomfortable using the GitBash shell.

See [Create a Repo](https://help.github.com/articles/create-a-repo/) on 
GitHub for help with creating the remote repository.

### Setting the remote origin

Obtain the remote site git-URL (starts with 'git') and copy it
to your clipboard.

On the command line, run:

    git remote add origin GITURL

where 'GITURL' is the remote site's git-based url.

### Commit the initial version before doing anything else!

    git add --all --verbose
    git commit 