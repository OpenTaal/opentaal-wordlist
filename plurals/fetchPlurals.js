var fs = require("fs");
let path = require("path");
var irregularFile = "irregular.json";
var outputFile = "nouns.json";
var helpers = require("./language-helpers");

try {
  fs.unlinkSync(path.join(__dirname, outputFile));
  console.log("Output file deleted.");
} catch (error) {
  console.log(error);
}

var nouns = JSON.parse(fs.readFileSync(path.join(__dirname, irregularFile), "utf8"));
var words = fs.readFileSync(path.join(__dirname, "../wordlist.txt"), "utf8").toString().split("\n");

var checkPlural = function (word) {
  if (!word.match(/^[a-zA-Z]*/g)) {
    console.log("niet alpha");
    return false;
  }

  // if word isn't an irregular or doesn't exist yet
  if (nouns.hasOwnProperty(word)) {
    console.log("irregular");
    return false;
  }

  // test if a pluralrule is listed in plurals list
  if (word.match(/\w*erik\b/)) {
    if (helpers.doesPluralExists(word + "en")) {
      nouns[word] = word + "en";
      return true;
    }
  }

  if (helpers.endsWithVowel(word)) {
    if (helpers.doesPluralExists(word + "ën")) {
      nouns[word] = word + "ën";
      return true;
    }
    if (helpers.doesPluralExists(word + "ëen")) {
      nouns[word] = word + "ëen";
      return true;
    }
    if (helpers.doesPluralExists(word + "en")) {
      nouns[word] = word + "en";
      return true;
    }
  }
  if (helpers.endsWithDoubleConsonant(word)) {
    if (helpers.endswithStemloos(word)) {
      var lastCharacter = word.charAt(word.length - 1);
      basicword = word.substring(0, word.length - 1);
      lastCharacter = lastCharacter.replace("f", "v");
      if (helpers.doesPluralExists(basicword + lastCharacter + "en")) {
        nouns[word] = basicword + lastCharacter + "en";
        return true;
      }
      lastCharacter = lastCharacter.replace("s", "z");
      if (helpers.doesPluralExists(basicword + lastCharacter + "en")) {
        nouns[word] = basicword + lastCharacter + "en";
        return true;
      }
    }
    if (helpers.doesPluralExists(word + "en")) {
      nouns[word] = word + "en";
      return true;
    }
    if (helpers.doesPluralExists(word + "s")) {
      nouns[word] = word + "s";
      return true;
    }
  }
  if (helpers.endsWithConsonant(word)) {
    var lastCharacter = word.charAt(word.length - 1);
    basicword = word.substring(0, word.length - 2);
    if (helpers.doesPluralExists(basicword + lastCharacter + "en")) {
      nouns[word] = basicword + lastCharacter + "en";
      return true;
    }
    
    if (helpers.doesPluralExists(word + word.slice(-1) + "en")) {
      nouns[word] = word + word.slice(-1) + "en";
      return true;
    }

    if (helpers.endswithStemloosVowel(word)) {
      var lastCharacter = word.charAt(word.length - 1);
      basicword = word.substring(0, word.length - 1);

      if (helpers.endsWithSingleConsonant(basicword)) {
        basicword = word.substring(0, word.length - 2);
        lastCharacter = lastCharacter.replace("f", "v");
        console.log(basicword + lastCharacter + "en");
        if (helpers.doesPluralExists(basicword + lastCharacter + "en")) {
          nouns[word] = basicword + lastCharacter + "en";
          return true;
        }
        lastCharacter = lastCharacter.replace("s", "z");
        if (helpers.doesPluralExists(basicword + lastCharacter + "en")) {
          nouns[word] = basicword + lastCharacter + "en";
          return true;
        }
      } else {
        lastCharacter = lastCharacter.replace("f", "v");
        if (helpers.doesPluralExists(basicword + lastCharacter + "en")) {
          nouns[word] = basicword + lastCharacter + "en";
          return true;
        }
        lastCharacter = lastCharacter.replace("s", "z");
        if (helpers.doesPluralExists(basicword + lastCharacter + "en")) {
          nouns[word] = basicword + lastCharacter + "en";
          return true;
        }
      }
    }
  }

  if (helpers.doesPluralExists(word + "'s")) {
    nouns[word] = word + "'s";
    return true;
  }

  if (helpers.doesPluralExists(word + "s")) {
    nouns[word] = word + "s";
    return true;
  }

  console.log("niet gevonden");
  return false;
};

words.forEach((word, index) => {
  console.log(word);
  checkPlural(word);
});

console.log(nouns);


let data = JSON.stringify(nouns);
fs.writeFile(path.join(__dirname, outputFile), data, err => {
  console.log("done");
});
