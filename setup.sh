#!/bin/sh

git init

rm -rf .gitmodules reveal.js
git submodule add --force https://github.com/gdiminneapolis/reveal.js.git reveal.js

bundle install
bundle binstub jekyll
bundle binstub rake

echo
echo " Remember to change _staging.yml to point at your github account."
echo
