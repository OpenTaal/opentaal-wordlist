var fs = require("fs");
let path = require("path");
var pluralsFile = "../experimenteel/nouns-meervouden.txt";

var plurals = fs.readFileSync(path.join(__dirname, pluralsFile), "utf8").toString().split("\n");

exports.isVowel = character => {
  return character.match(/[aeiou]/);
};

exports.isConsonant = character => {
  return character.match(/[bcdfghjklmnpqrstvwxyz]/);
};

exports.endsWithVowel = word => {
  return word.match(/\w*[aeiou]\b/);
};

exports.endsWithConsonant = word => {
  return word.match(/\w*[bcdfghjklmnpqrstvwxyz]\b/);
};

exports.endsWithDoubleE = word => {
  return word.match(/\w*ee\b/);
};

exports.endsWithDoubleConsonant = word => {
  return word.match(/\w*[bcdfghjklmnpqrstvwxyz][bcdfghjklmnpqrstvwxyz]\b/);
};

exports.endsWithSingleConsonant = word => {
  return word.match(/\w*[aeiou][bcdfghjklmnpqrstvwxyz]\b/);
};

exports.endswithStemloosVowel = word => {
  return word.match(/\w*[aeiou][aeiou][tkfschp]\b/);
};

exports.endswithStemloos = word => {
  return word.match(/\w*[bcdfghjklmnpqrstvwxyz][tkfschp]\b/);
};

exports.doesPluralExists = plural => {
  return plurals.includes(plural);
};
