#!/bin/bash

npm install
while ! timeout 1 bash -c "echo > /dev/tcp/mysql/3306"; do sleep 1; done
node autocomplete.js