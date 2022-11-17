var fs = require("fs");
let path = require("path");
var outputFile = "irregular.json";

var nounString,
  nouns;

var irregulars = {
  been: [
    "beenderen", "benen"
  ],
  blad: [
    "bladeren", "bladen", "blaren"
  ],
  ei: "eieren",
  gelid: "gelederen",
  gemoed: "gemoederen",
  goed: "goederen",
  hoen: "hoenderen",
  kalf: "kalveren",
  kind: "kinderen",
  kleed: [
    "kleren", "klederen", "kleden"
  ],
  lam: "lammeren",
  lied: "liederen",
  rad: "raderen",
  rund: "runderen",
  volk: [
    "volken", "volkeren"
  ],
  koe: "koeien",
  vlo: "vlooien",
  leerrede: [
    "leerredenen", "leerredes"
  ],
  lende: [
    "lendenen", "lenden"
  ],
  kleinood: [
    "kleinoden", "kleinodiën"
  ],
  sieraad: [
    "sieraden", "sieradiën"
  ],
  epos: [
    "epen", "epossen"
  ],
  genius: "geniën",
  aanbod: "aanbiedingen",
  beleg: [
    "beleggingen", "belegeringen"
  ],
  dank: "dankbetuigingen",
  doel: [
    "doeleinden", "doelen"
  ],
  gedrag: "gedragingen",
  genot: "genietingen",
  lof: [
    "loftuitingen", "lofbetuigingen"
  ],
  onderzoek: [
    "onderzoekingen", "onderzoeken"
  ],
  raad: "raadgevingen",
  rede: [
    "redevoeringen", "redes"
  ],
  fotograaf: "fotografen",
  paragraaf: "paragrafen",
  telegraaf: "telegrafen",
  burggraaf: "burggraven",
  loopgraaf: "loopgraven",
  filosoof: "filosofen",
  theosoof: "theosofen",
  elf: "elfen",
  paraaf: "parafen",
  stad: "steden",
  bad: "baden",
  bedrag: "bedragen",
  blad: [
    "bladeren", "bladen", "blaren"
  ],
  dag: "dagen",
  dak: "daken",
  dal: "dalen",
  gat: "gaten",
  gelag: "gelagen",
  glas: "glazen",
  graf: "graven",
  pad: [
    "paden", "padden"
  ],
  slag: "slagen",
  staf: [
    "staffen", "staven"
  ],
  vat: "vaten",
  verdrag: "verdragen",
  handvat: [
    "handvatten", "handvaten"
  ],
  bevel: "bevelen",
  gebed: "gebeden",
  gebrek: "gebreken",
  gen: "genen",
  spel: "spelen",
  tred: "treden",
  weg: "wegen",
  gemet: "gemeten",
  bijzonderheid: "bijzonderheden",
  kleinigheid: "kleinigheden",
  moeilijkheid: "moeilijkheden",
  lid: "leden",
  rif: "reven",
  schip: "schepen",
  smid: "smeden",
  spit: [
    "spitten", "speten"
  ],
  alcohol: "alcoholen",
  elektron: "elektronen",
  neutron: "neutronen",
  proton: "protonen",
  gebod: "geboden",
  god: "goden",
  hertog: "hertogen",
  hof: "hoven",
  hol: "holen",
  kot: [
    "kotten", "koten"
  ],
  lot: "loten",
  oorlog: "oorlogen",
  schot: "schoten",
  slot: "sloten",
  verbod: "verboden",
  verlof: "verloven",
  kruis: "kruizen",
  pers: "persen",
  balans: "balansen",
  concours: "concoursen",
  dans: "dansen",
  diocees: "diocesen",
  eis: "eisen",
  forens: [
    "forensen", "forenzen"
  ],
  impuls: "impulsen",
  kaars: "kaarsen",
  kans: "kansen",
  kers: "kersen",
  kikvors: "kikvorsen",
  koers: "koersen",
  kous: "kousen",
  krans: "kransen",
  lans: "lansen",
  mars: "marsen",
  mens: "mensen",
  ons: [
    "onsen", "onzen"
  ],
  paus: "pausen",
  plons: [
    "plonsen", "plonzen"
  ],
  pols: "polsen",
  prins: "prinsen",
  pruis: "pruisen",
  saus: [
    "sausen", "sauzen"
  ],
  schans: "schansen",
  spons: [
    "sponzen", "sponsen"
  ],
  stimulans: "stimulansen",
  tendens: "tendensen",
  trans: "transen",
  wals: "walsen",
  wens: "wensen",
  zeis: "zeisen",
  einde: ["eindes", "einden"],
  symbool: "symbolen",
  knop: ["knopen", "knoppen"]
};

// https://e-ans.ivdnt.org/topics/pid/ans03050402lingtopic
nounString = "edelman krijgsman landman raadsman weidman";
nouns = nounString.split(" ");

nouns.forEach(noun => {
  irregulars[noun] = noun.replace(/man$/, "lieden");
});

nounString = "akkerman ambachtsman baggerman  bootsman buitenman burgerman buurman handelsman handwerksman kooiman koopman scheepstimmerman timmerman schieman sjouwerman speelman stadswerkman werkman stuurman tuinman vakman varensman veerman voerman zakenman zeeman zegsman";
nouns = nounString.split(" ");

nouns.forEach(noun => {
  irregulars[noun] = [
    noun.replace(/man$/, "lui"),
    noun.replace(/man$/, "lieden")
  ];
});

nounString = "bewindsman bruggeman cameraman hoofdman leidsman ombudsman staatsman vertrouwensman verzetsman voorman";
nouns = nounString.split(" ");
nouns.forEach(noun => {
  irregulars[noun] = [
    noun.replace(/man$/, "mannen"),
    noun.replace(/man$/, "lieden")
  ];
});

nounString = "brandweerman kantoorman opperman sportsman vakman";
nouns = nounString.split(" ");
nouns.forEach(noun => {
  irregulars[noun] = [
    noun.replace(/man$/, "mannen"),
    noun.replace(/man$/, "lieden"),
    noun.replace(/man$/, "lui")
  ];
});

nounString = "barman bosjesman boeman dronkeman ijscoman jongeman kiesman kikvorsman krantenman leenman medicijnman melkman muzelman Noorman olieman onderwijsman orgelman partijman politieman sandwichman schillenman spoorwegman stroman stuntman vakbondsman vuilnisman weerman wetenschapsman wildeman";
nouns = nounString.split(" ");
nouns.forEach(noun => {
  irregulars[noun] = noun.replace(/man$/, "mannen");
});

let data = JSON.stringify(irregulars);
fs.writeFile(path.join(__dirname, outputFile), data, err => {
  console.log("done");
});
