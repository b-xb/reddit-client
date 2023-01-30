#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd build

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

gh auth login

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:`git config user.name`/reddit-client.git main:gh-pages
git push -f https://github.com/b-xb/reddit-client.git main:gh-pages

cd -