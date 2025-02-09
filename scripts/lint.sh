#!/usr/bin/env sh

echo '* CHECKBASHISMS'
checkbashisms *.sh

FILES='*.py'
echo '* PYDOCSTYLE'
pydocstyle --convention=numpy $FILES
echo '* FLAKE8'
flake8 --ignore E501 $FILES
echo '* PYLINT'
pylint --notes FIXME $FILES
echo '* PYFLAKES'
pyflakes $FILES
echo '* PYRIGHT-ALRIGHT'
pyright-alright $FILES
echo '* MYPY'
mypy $FILES
