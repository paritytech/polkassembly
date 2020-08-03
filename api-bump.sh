#!/bin/bash

cd auth-server && yarn api:bump

cd ..

cd front-end && yarn api:bump

cd ..

cd health-monitor && yarn api:bump

cd ..

cd node-watcher && yarn api:bump

cd ..
