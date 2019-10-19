#!/bin/bash

rm -rf /var/www/basefn/*

cp -R ./dist/* /var/www/basefn/

git reset --hard

echo 'dsds'