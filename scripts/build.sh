#! /usr/bin/env bash

set -env

SCRIPT_DIR=$(dirname "$0")

if [[ -z "$GROUP"]] ; then
    echo "Cannot find GROUP env var"
    exit 1
fi 

if [[ - "$COMMIT"]] ; then
    echo "Cannot find COMMIT env var"
    exit 1
fi

if [["$(uname)" == "nitikornchumnankul"]] ; then
    DOCKER_CMD=docker 
 else
    DOCKER_CMD="sudo docker"
fi

CODE_DIR=$(cd $SCRIPT_DIR/..; pwd)
echo $CODE_DIR

REPO=$(GROUP)/$(basename E-COMMERCE-AND-CANARY-DEPLOYMENT);

$DOCKER_CMD build -t ${REPO}:${COMMIT} .