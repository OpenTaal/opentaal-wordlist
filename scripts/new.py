#!/usr/bin/env python3
"""Find new words from Dutch corpus word count."""

import re

# pylint:disable=unspecified-encoding

words = set()
with open('../wordlist.txt') as content:
    for line in content:
        words.add(line[:-1])
with open('../elements/wordparts.tsv') as content:
    for line in content:
        words.add(line[:-1].split('\t')[0])
with open('../elements/corrections.tsv') as content:
    for line in content:
        words.add(line[:-1].split('\t')[0])

condition = re.compile(r'^[a-záàäâåéèëêíìïîóòöôúùüûçñ-]+$')
with open('dut.corpus.wordcount') as content, \
     open('new.txt', 'w') as new:
    for line in content:
        line = line.strip()
        if ' ' in line:
            count, word = line.split(' ', 1)
            if int(count) >= 1000 and condition.match(word) \
               and word not in words:
                new.write(f'{word}\n')
