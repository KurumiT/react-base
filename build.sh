#!/bin/bash

git pull
docker-compose exec -T frontend yarn
docker-compose exec -T frontend yarn build
rm -rf ./project-old
cp -r ./project ./project-old
ln -sf ./project-old ./current
rm -rf ./project
cp -r ./dist ./project
rm -rf ./current
ln -sf ./project ./current