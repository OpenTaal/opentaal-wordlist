#!/usr/bin/env python3
'''Convert word list to ASCII-only version.'''

from os.path import realpath, join, dirname

with open(realpath(join(dirname(__file__), '../wordlist.txt'))) as unicode, open(realpath(join(dirname(__file__), '../elements/wordlist-ascii.txt')), 'w') as askii, open(realpath(join(dirname(__file__), '../elements/wordlist-non-ascii.txt')), 'w') as non_askii:
    for word in unicode:
        if word.isascii():
            askii.write(word)
        else:
            non_askii.write(word)
