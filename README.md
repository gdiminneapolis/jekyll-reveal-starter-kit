# jekyll-reveal-starter-kit

A starting point for developing GDI slide sets using the reveal.js
library and the jekyll static site generator.

[Jekyll](http://jekyllrb.com) is a
[static-site generator](https://en.wikipedia.org/wiki/Web_template_system#Static_page_generators)
typically used to generate blogs, but also used heavily by
[Github Pages](https://pages.github.com/) to publish websites.

This starter kit allows the user to create a
[RevealJS](http://lab.hakim.se/reveal-js/) slide set for a class. This
particular version of reveal has
[been customized](https://github.com/Cara-Jo/reveal.js) specifically
by and for Girl Develop It to keep class materials consistent.

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

* [Hub](https://github.com/github/hub#installation) if you are on a Mac



## Starter Kit Installation

1. Download the zipped source files from github at `https://github.com/gdiminneapolis/jekyll-reveal-starter-kit/archive/master.zip` and save it someplace memorable.

2. Create and/or go to the parent directory for your new slide set.

3. Unzip the zipped source you downloaded into the parent directory.

4. Rename the newly created directory to the name you want for your Github repository.

5. Change into the new directory.

7. Run the setup script: `./setup.sh` on a Mac or Linux. We have to do something else on Windows.

8. Create your github repository for this repo.

9. Add and commit all the files to master. Push to the remote when satisfied.

10. Right now, create a new branch for working on the slides and push that to the remote as well.

### Keep Git Up to Date

Like with any other project, use git's features to maintain a good
clean working tree and remote repository. When you want to start off
on a new feature, or just try something out, create a branch. If it's
what you want, merge it back in to master.

## Configuration

There are some configuration values to set, which are found in the
`_config.yml`, `_staging.yml` and `_publish.yml` files in the home
directory. (See
[editing yaml files](https://github.com/gdiminneapolis/jekyll-reveal-starter-kit/wiki/Editing-YAML-files)
in the starter kit wiki.) Edit these files in your code editor and
change the settings to be what you want.

*Note:* the `baseurl` value **must** begin with a "/" character. Leave
the end without a "/" character as well.

### `_config.yml`

Obvious things like the title, description, and keywords should be
changed to fit your new slide set. These appear in the head of the
documents, and in the default title page of the of the slide set.

Don't touch `baseurl` or `url` in this file. These are the values that
work with the Jekyll server so you can preview your work.

### `_staging.yml`

This file gets appended to the configuration set when building for
staging.  In this file, you should set the `url` field by changing the
`YOUR_GITHUB_ACCOUNT` string to, well, your github account name.

Change `baseurl` to the name of your github repo. Make sure the string
begins with a forward slash ("/").

### `_publish.yml`

Change the `baseurl` to the name of the github repo as it will be on
`https://github.com/gdiminneapolis`. If you don't feel comfortable
doing this, discuss this with at the organization.

## Spin up the Jekyll Server

**NOTE** that the jekyll `--watch` option does **not** work on Windows. We have to do something else to make a convenient watching/viewing-as-you-save-changes thing.

Everything should be good to go, now, and you can start up the Jekyll
development server to show the slides while you create them.

    $ rake

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

* start with a sequence number, the slides will be ordered by this
  sequence number. A good sequencing scheme is `00.00` where the first
  set of numbers is the class section, and the second set is the
  slides in that section. Example: `00.00.introduction.html`
* the slide title, lowercased, only letters, numbers, and dashes --
  use dashes for spaces between words.
* the extension `.html` (you can also edit your slides in Markdown
  using the `.md` extension.)

For example, the introduction slide is:
`_slides/00.00.introduction.html` and the very last slide would be
`_slides/99.99.fin.html`.

A very good practice is to leave gaps in the sequence number to make
it easy to rearrange slides if you want, or insert content as you'd
like.

If you need more than 100 sections or more than 100 slides per
section, make sure your numbering allows this because the system is
rather stupid about it. Example: `000.001.slide-title.html`. If you do
think you need this, though, think about restructuring the
presentation into more than one slide set. You can create new
collections, for example, and have a root `.html` file for each
collection.

## Slide Content

### Frontmatter

Frontmatter is a preamble of YAML settings at the start of every slide.

Every slide needs to have at least the following frontmatter:

``` yaml
---
layout: slide
---
```

You can also put other meta data in the frontmatter. A useful one is the slide's title:

``` yaml
---
layout: slide
title: Let's Develop It!
---
```

And you can use the title in the body with a little Liquid:

``` html
<h1>{{ page.title }}</h1>
```

This comes in very handy when there are multiple `section`s in the
slide to put the title on each `section`.


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
<h1>{{ page.title }}</h1>
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

Since we're all about the code, you can place code snippets on the slide using Jekyll's `highlight` feature:

``` html
Here's an example:

{% highlight html linenos %}
<div class="introduction">
  <h1>Introduction</h1>
  <ul>
    <li>My Life</li>
  </ul>
</div>
{% endhighlight %}
```

Make sure to keep your snippets short, so they stay on the slide
nicely.

### Helper and Override Classes

There are several helper and override classes defined in `_sass/_overrides.scss`. Please feel free to add to this for your own work. You can add more Sass partials to the `_sass/` directory as well, just make sure they get `@import`ed in `css/main.scss`.

### JavaScripts

The `js/` directory holds the scripts you can change, or add your own. If you add new script files, make sure the add them in `_includes/scripts.html` as well. Follow the pattern used there for `revealConfig.js`.

## Build the Presentation

To build the slide presentation for publication, *stop* the running
`jekyll` server with `ctrl-C`. Then at the command line, enter:

``` bash
rake staging:build
```

This will build the presentation into the `_site` folder. You can open
the presentation from there to see if it's as you want.

## Staging the Presentation

By default, everything we've done will allow us to easily publish
slides and notes on your repo's Github pages. This is where you'll
"stage" the presentation to allow other folks to review it as slides
and give feedback.

    $ rake staging:push

You can run both the staging build and push task with just:

    $ rake staging

## Contributing

This project is intended to be a safe, welcoming space for
collaboration, especially among members of Girl Develop It and it's
various chapters. Contributors are expected to read and follow the
[Contributor Covenant](CONTRIBUTOR_COVENANT.md) code of conduct.

Feel free to fork this repo and make changes as you want. If you want
to contribute back, submit a PR at
<https://github.com/gdiminneapolis/jekyll-reveal-starter-kit/pulls>
with your changes.  Bug reports, issues, questions, and suggestions
are welcome at
<https://github.com/gdiminneapolis/jekyll-reveal-starter-kit/issues>.
The project has a wiki at
<https://github.com/gdiminneapolis/jekyll-reveal-starter-kit/wiki>
where you can contribute wisdom and share information about using the
starter kit.

## Licensing

This project is licensed as Creative Commons Attribution
Non-commercial 3.0 Unported (CC BY-NC 3.0)
<https://creativecommons.org/licenses/by-nc/3.0/>.

## Author

* [Tamara Temple](https://github.com/tamouse) of the
  [GDI Minneapolis team](https://github.com/gdiminneapolis)

## Thanks

* The
  [Jekyll team](https://github.com/jekyll/jekyll/graphs/contributors),
  especially parkr

* [Hakim El Hattab](https://github.com/hakimel), creator of
  `reveal.js`

* [Cara Jo](https://github.com/Cara-Jo) of the
  [GDI Boulder team](https://github.com/gdiboulder)
