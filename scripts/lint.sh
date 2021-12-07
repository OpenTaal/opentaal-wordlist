#!/bin/bash

# sudo apt-get -y install devscripts
checkbashisms *.sh

# sudo pip3 install -U pylint pyflakes mypy
pylint *.py
pyflakes *.py
mypy *.py
