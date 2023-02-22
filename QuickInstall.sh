#!/bin/bash

cd potion-front && npm install
cd ../potion-landing && npm install
cd ../potion-back && npm install && node seed.js
