#!/usr/bin/env python3
"""Convert word list to ASCII-only version."""

# pylint:disable=unspecified-encoding

with open('../wordlist.txt') as unicode, \
     open('../elements/wordlist-ascii.txt', 'w') as askii, \
     open('../elements/wordlist-non-ascii.txt', 'w') as non_askii:
    for word in unicode:
        if word.isascii():
            askii.write(word)
        else:
            non_askii.write(word)
