#!/bin/sh

git init

git rm -rf source/reveal.js
git submodule add --force https://github.com/gdiminneapolis/reveal.js.git source/reveal.js

bundle install
bundle binstub jekyll
bundle binstub rake

npm install


echo
echo " Remember to change _staging.yml to point at your github account."
echo
