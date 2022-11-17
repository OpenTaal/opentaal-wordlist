#!/bin/bash

# sudo apt-get -y install devscripts
checkbashisms *.sh

# pip install -U pylint pyflakes mypy
pylint *.py
pyflakes *.py
mypy *.py
