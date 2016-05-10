# jekyll-reveal-starter-kit

A starting point for developing GDI slide sets using the reveal.js library and the jekyll static site generator

[Jekyll](http://jekyllrb.com) is a
[static-site generator](https://en.wikipedia.org/wiki/Web_template_system#Static_page_generators)
typically used to generate blogs, but also used heavily by
[Github Pages](https://pages.github.com/) to publish websites.

This starter kit allows the user to create a
[RevealJS](http://lab.hakim.se/reveal-js/) slide set for a class. This
particular version of reveal has been customized specifically by and
for Girl Develop It to keep class materials consisten.

The [GDIMpls Version](https://github.com/gdiminneapolis/reveal.js) of
reveal is embedded in this starter kit as a
[git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
in order to provide the ability to get central updates when the
designs change.

## Pre-requisites

This starter kit needs to have the following software already
installed:

* [Git](https://github.com/gdiminneapolis/jekyll-reveal-starter-kit/wiki/Installing-Git)
* [Ruby](https://github.com/gdiminneapolis/jekyll-reveal-starter-kit/wiki/Installing-Ruby)
* Ruby `bundler` gem:

``` bash
gem install bundler
```

## Starter Kit Installation

To start a new set of class slides, or a new presentation, clone the
[repo] to your local system:

``` bash
git clone https://github.com/gdiminneapolis/jekyll-reveal-starter-kit.git my-awesome-course
```

where `my-awesome-course` is an empty directory you'll use to create
your presentation. When you create the course name, remember to **use
only lower-case letters, numbers, and dashes** in the filename. This
will become part of an externally available URL, so the URL format
must be valid.

Change the remote `origin` to `upstream`:

``` bash
git remote rename origin upstream
```

Create the remote `origin` for this repository. Using the **SSH**
version of the remote url, set the new `origin`;

``` bash
git remote add origin git@github.com:gdiminneapolis/my-awesome-course.git
```

Go ahead and push the current initial version up to your new repo:

``` bash
git push -u origin HEAD
```

Initialize **and** update (both) the git submodule(s):

``` bash
git submodule init
git submodule update
```

### Keep Git Up to Date

Like with any other project, use git's features to maintain a good
clean working tree and remote repository. When you want to start off
on a new feature, or just try something out, create a branch. If it's
what you want, merge it back in to master.

## Complete Installtion

To complete the installation, run the `bundle install` command. On
OS/X or Ubuntu, it looks like this:

``` bash
bundle install
bundle binstub jekyll
```

## Configuration

There are some configuration values to set, which are found in the
`_config.yml` and `_config_publish.yml` files in the home
directory. (See
[editing yaml files](https://github.com/gdiminneapolis/jekyll-reveal-starter-kit/wiki/Editing-YAML-files)
in the starter kit wiki.) Edit these files in your code editor and
change the settings to be what you want.

There are only two settings you must absolutely change:

* `title` - change this to the title of your course
* `baseurl` - change this to the repository base name

Using the above example, you'd have:

``` yaml
title: My Awesome Course
baseurl: /my-awesome-course
```

(Thus revealing whey the restriction on the name for your repository:
it's used in the URL for the slide set when published on Github
pages.)

*Note:* the `baseurl` value **must** begin with a "/" character. Leave
the end without a "/" character as well.

## Spin up the Jekyll Server

Everything should be good to go, now, and you can start up the Jekyll
development server to show the slides while you create them.

``` bash
bin/jekyll serve
```

You may want to pay attention to the terminal window running the
server, as that is where errors will be reported in case there's
something amiss in your slides. Every time you modify a file in
folder, jekyll will rebuild the site. Since there's not going to be a
lot of slides, or other material, this generally is very fast.

The server will show you the URL you can browse to locally to see the
slides. With this initial starter kit set up, there's no
live-reloading of changes, so you'll still need to refresh the slide
page in the browser.

## Creating the Slides

Slides live in the `_slides` folder, and should be named with the
following conventions:

* start with a sequence number. By default, I've started the sequence
  at 000 -- this allows up to 999 slides.
* the slide title, lowercased, only letters, numbers, and dashes --
  use dashes for spaces between words.
* the extension `.html` (you can edit your slides in Markdown using
  the `.md` extension.)

For example, the introduction slide is:
`_slides/000-introduction.html`.

A very good practice is to leave gaps in the sequence number to make
it easy to rearrange slides if you want, or insert conent as you'd
like.

## Slide Content

### Frontmatter

Frontmatter is a preamble of YAML settings at the start of every slide.

Every slide needs to have at least the following frontmatter:

``` yaml
---
layout: slide
title: Slide Title
---
```

### Slide Body

After that point, you can provide the HTML that will make up your
slide.

In `reveal.js` whatever appears within a `<section>` tag is the body
of the slide. The `slide` layout in the frontmatter provides this for
you, so you can simply start on the content.

For example, the standard "Welcome" slide has the following content:

``` html
---
layout: slide
title: "Welcome!"
---
<div class="left-align">
  <p>Girl Develop It is here to provide affordable and accessible programs to learn software through mentorship and hands-on instruction.</p>
  <p class="green">Some "rules"</p>
  <ul class="go-wide">
    <li>We are here for you!</li>
    <li>Every question is important</li>
    <li>Help each other</li>
    <li>Have fun</li>
  </ul>
</div>
```

which should be pretty easy to figure out.

### Fragments

If you want a slide to load in fragments, each `<section>` element you
put in the slide body will be loaded with each step. (Not necessarily
a good presentation practice, but a lot of people seem to use it.)

### Code Snippets

Since we're all about the code, you can place snippets on the slide by
wrapping them with `<pre><code>` elements. These will be nicely
formatted and syntax highlighted. To tell the highlighter what
language syntax to use, give the `<code>` tag the appropriate `class`
attribute:

``` html
<pre>
  <code class="css">
    h1 {
      font-weight: bold;
      text-size: 120%;
    }
  </code>
</pre>
```

Make sure to keep your snippets short, so they stay on the slide
nicely.

### Helper Classes

`reveal.js` seems to shorten boxes on some blocks, making ridiculous
line breaks when the text would look a lot better all on one line.

There are two helpers for this:

* `go-wide` - sets the box width to 960px
* `no-wrap` - forces the contents to never wrap on white spaces

## Build the Presentation

To build the slide presentation for publication, *stop* the running
`jekyll` server. Then at the command line, enter:

``` bash
bin/jekyll build --config=_config.yml,_config_publish.yml
```

This will build the presentation into the `_site` folder. You can open
the presentation from there to see if it's as you want.

## Publish the Presentation

By default, everything we've done will allow us to easily publish
slides and notes on Github pages. Follow these steps.

### First time only

We'll need the URL of the git remote origin (where we have been saving
the slides). The following command on OS/X or Ubuntu will save it in a
bash variable:

``` bash
ORG=$(git remote -v | grep origin | head -1 | awk '{print $2}')
```

Next, descend into the `_site` folder and run `git init`

``` bash
cd _site
git init
```

Add the remote:

``` bash
git remote add origin $ORG
```

Set the branch to `gh-pages`:

``` bash
git checkout -b gh-pages
```

Now, add all the file, commit them, and push them up to the remote:

``` bash
git add --all -v
git commit -m "publish"
git push -u origin HEAD
```

### Every time you want to publish

Most of the previous steps settings will be intact in the `_site`
folder, so you should only need to do the following:

``` bash
cd _site
git add --all -v
git commit -m "publish"
git push -u origin HEAD
cd ..
```
