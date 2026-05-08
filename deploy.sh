#!/bin/bash
set -e

CURRENT_BRANCH=$(git branch --show-current)

if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "Please run deploy from the main branch."
  exit 1
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "You have uncommitted changes. Please commit your work before deploying."
  git status
  exit 1
fi

if ! git show-ref --verify --quiet refs/heads/gh-pages; then
  git branch gh-pages
fi

git checkout gh-pages
git merge main --no-edit

npm run build

git add dist -f
git commit -m "Deployment commit" || echo "Nothing new to commit."

git subtree push --prefix dist origin gh-pages

git checkout main

echo "Deployment complete."
