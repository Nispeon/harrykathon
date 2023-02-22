#!/bin/bash

sudo netstat -nlp | grep ':51\|:80\|:3000' | while read -r line ; do kill $(echo "$line" | awk '{split($NF,a,"/"); print a[1]}') ;done
