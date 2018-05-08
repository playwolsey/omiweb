#! /bin/bash
# commit code and push origin to remote

git add -A
if [ $2 = "N" ]; then
git commit -m "$1" --no-verify
else
git commit -m "$1"
fi
git push
