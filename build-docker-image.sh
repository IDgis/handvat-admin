#!/bin/bash

echo building docker image of handvat-admin...

if [ -z "$1" ]; then
    echo no tag provided
    exit 1
fi

docker build -t idgis/handvat-admin:$1 .
