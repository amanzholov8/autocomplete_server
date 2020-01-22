#!/bin/bash

npm install
npm install -g nodemon
while ! timeout 1 bash -c "echo > /dev/tcp/mysql/3306"; do sleep 1; done
npm start