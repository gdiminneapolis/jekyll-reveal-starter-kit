#!/bin/sh

git init

bundle install
bundle binstub jekyll
bundle binstub rake

npm install

echo
echo " Remember to change _staging.yml to point at your github account."
echo
