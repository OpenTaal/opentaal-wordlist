# dutch

Dutch word lists and dictionaries for Spell, Ispell, Aspell, Myspell and Hunspell

This repository is aimed at collecting all information and files involved in the source package dutch and resulting architecture-independent packages in order to improve these in the near future. The resulting packages are:
* wdutch for Spell
* idutch for Ispell
* aspell-nl for Aspell
* myspell-nl for Myspell
* hunspell-nl for Hunspell


## Sources


### Debian

https://anonscm.debian.org/viewvc/pkg-dutch/trunk/

http://cdn-fastly.deb.debian.org/debian/pool/main/d/dutch/

https://lintian.debian.org/maintainer/thijs@debian.org.html#dutch

http://changelogs.ubuntu.com/changelogs/pool/main/d/dutch/

https://bugs.debian.org/cgi-bin/pkgreport.cgi?src=dutch

https://tracker.debian.org/pkg/dutch

https://packages.qa.debian.org/d/dutch.html

https://packages.debian.org/source/sid/dutch

https://packages.debian.org/source/stretch/dutch

https://qa.debian.org/cgi-bin/vcswatch?package=dutch

https://buildd.debian.org/status/package.php?p=dutch


### Ubuntu

http://packages.ubuntu.com/source/zesty/dutch

https://launchpad.net/ubuntu/+source/dutch


## Tests

Automated test should be added for:
* character encoding
* maximum word list and dictionary length
* duplicate file paths in packages


## Attention

Attention should be given to:
* upgrading external dependencies on myspell-nl


## Fixme


### Lintian warnings

https://lintian.debian.org/maintainer/thijs@debian.org.html#dutch


### Update Vcs field

https://qa.debian.org/cgi-bin/vcswatch?package=dutch


### myspell-nl could be marked Multi-Arch: foreign

https://wiki.debian.org/MultiArch/Hints#ma-foreign


### Content bug or duplicate bugs

https://bugs.debian.org/cgi-bin/pkgreport.cgi?src=dutch


### ispell-nl

package lists /usr/lib/ispell/dutch.hash twice

$ dpkg -l aspell-nl


### aspell-nl

package lists /usr/lib/aspell/nl.rws twice

$ dpkg -l aspell-nl


### idutch

package results in warning on illegal characters

# apt-get install idutch
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following NEW packages will be installed:
  idutch
0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.
Need to get 894 kB of archives.
After this operation, 941 kB of additional disk space will be used.
Get:1 http://nl.archive.ubuntu.com/ubuntu yakkety/universe amd64 idutch all 1:2.10-5 [894 kB]
Fetched 894 kB in 0s (1,186 kB/s)
Preconfiguring packages ...
Selecting previously unselected package idutch.
(Reading database ... 301648 files and directories currently installed.)
Preparing to unpack .../idutch_1%3a2.10-5_all.deb ...
Unpacking idutch (1:2.10-5) ...
Setting up idutch (1:2.10-5) ...
Processing triggers for dictionaries-common (1.27.1) ...
ispell-autobuildhash: Processing 'dutch' dict.

Word 'Abbas'' contains illegal characters

Word 'Abdelaziz'' contains illegal characters

Word 'Achilles'' contains illegal characters

Word 'Adrianus'' contains illegal characters

Word 'Aeneas'' contains illegal characters

Word 'Agnes'' contains illegal characters

Word 'Alanis'' contains illegal characters

Word 'Albertus'' contains illegal characters

Word 'Alex'' contains illegal characters

Word 'Alexandros'' contains illegal characters

Word 'Alexis'' contains illegal characters

Word 'Alfons'' contains illegal characters

Word 'Alies'' contains illegal characters

Word 'Alix'' contains illegal characters

Word 'Aloys'' contains illegal characters

Word 'Aloysius'' contains illegal characters

Word 'Alphons'' contains illegal characters

Word 'Alphonsus'' contains illegal characters

Word 'Amaryllis'' contains illegal characters

Word 'Amos'' contains illegal characters

Word 'Anas'' contains illegal characters

Word 'Ana�s'' contains illegal characters

Word 'Andreas'' contains illegal characters

Word 'Andres'' contains illegal characters

Word 'Andries'' contains illegal characters

Word 'Andr�s'' contains illegal characters

Word 'Angelos'' contains illegal characters

Word 'Angus'' contains illegal characters

Word 'Annelies'' contains illegal characters

Word 'Anneloes'' contains illegal characters

Word 'Ans'' contains illegal characters

Word 'Anthonius'' contains illegal characters

Word 'Antonius'' contains illegal characters

Word 'Aras'' contains illegal characters

Word 'Ares'' contains illegal characters

Word 'Aris'' contains illegal characters

Word 'Arnoldus'' contains illegal characters

Word 'Augustinus'' contains illegal characters

Word 'Aziz'' contains illegal characters

Word 'Babs'' contains illegal characters

Word 'Baris'' contains illegal characters

Word 'Bartholomeus'' contains illegal characters

Word 'Bas'' contains illegal characters

Word 'Beatrijs'' contains illegal characters

Word 'Beatrix'' contains illegal characters

Word 'Beatriz'' contains illegal characters

Word 'Benedictus'' contains illegal characters

Word 'Bernardus'' contains illegal characters

Word 'Bertus'' contains illegal characters

Word 'Bess'' contains illegal characters

Word 'Boas'' contains illegal characters

Word 'Boaz'' contains illegal characters

Word 'Boris'' contains illegal characters

Word 'Broes'' contains illegal characters

Word 'Buddingh'' contains illegal characters

Word 'Carlos'' contains illegal characters

Word 'Carolus'' contains illegal characters

Word 'Cars'' contains illegal characters

Word 'Cas'' contains illegal characters

Word 'Casparus'' contains illegal characters

Word 'Cees'' contains illegal characters

Word 'Charis'' contains illegal characters

Word 'Charles'' contains illegal characters

Word 'Chavez'' contains illegal characters

Word 'Chris'' contains illegal characters

Word 'Christianus'' contains illegal characters

Word 'Christos'' contains illegal characters

Word 'Christus'' contains illegal characters

Word 'Cis'' contains illegal characters

Word 'Claus'' contains illegal characters

Word 'Clays'' contains illegal characters

Word 'Clemens'' contains illegal characters

Word 'Columbus'' contains illegal characters

Word 'Constantinus'' contains illegal characters

Word 'Cornelis'' contains illegal characters

Word 'Cornelius'' contains illegal characters

Word 'Cris'' contains illegal characters

Word 'Curtis'' contains illegal characters

Word 'Cyrus'' contains illegal characters

Word 'Damaris'' contains illegal characters

Word 'Damianus'' contains illegal characters

Word 'Danish'' contains illegal characters

Word 'Darius'' contains illegal characters

Word 'Dax'' contains illegal characters

Word 'Deejays'' contains illegal characters

Word 'Denis'' contains illegal characters

Word 'Deniz'' contains illegal characters

Word 'Dennis'' contains illegal characters

Word 'Dex'' contains illegal characters

Word 'Diaz'' contains illegal characters

Word 'Dimas'' contains illegal characters

Word 'Dinesh'' contains illegal characters

Word 'Dionisius'' contains illegal characters

Word 'Dionysius'' contains illegal characters

Word 'Dolores'' contains illegal characters

Word 'Dominicus'' contains illegal characters

Word 'Dorcas'' contains illegal characters

Word 'Doris'' contains illegal characters

Word 'Dorus'' contains illegal characters

Word 'Douglas'' contains illegal characters

Word 'Dries'' contains illegal characters

Word 'Driss'' contains illegal characters

Word 'Eduardus'' contains illegal characters

Word 'Egbertus'' contains illegal characters

Word 'Egidius'' contains illegal characters

Word 'Elias'' contains illegal characters

Word 'Elles'' contains illegal characters

Word 'Ellis'' contains illegal characters

Word 'Els'' contains illegal characters

Word 'Elvis'' contains illegal characters

Word 'Eneas'' contains illegal characters

Word 'Engelbertus'' contains illegal characters

Word 'Ennis'' contains illegal characters

Word 'Eros'' contains illegal characters

Word 'Everardus'' contains illegal characters

Word 'Faas'' contains illegal characters

Word 'Fares'' contains illegal characters

Word 'Faris'' contains illegal characters

Word 'Fays'' contains illegal characters

Word 'Felix'' contains illegal characters

Word 'Ferdinandus'' contains illegal characters

Word 'Ferris'' contains illegal characters

Word 'Filippus'' contains illegal characters

Word 'Florens'' contains illegal characters

Word 'Floris'' contains illegal characters

Word 'Fons'' contains illegal characters

Word 'Frances'' contains illegal characters

Word 'Francis'' contains illegal characters

Word 'Franciscus'' contains illegal characters

Word 'Francois'' contains illegal characters

Word 'Frans'' contains illegal characters

Word 'Fransiscus'' contains illegal characters

Word 'Franz'' contains illegal characters

Word 'Fran�ois'' contains illegal characters

Word 'Fredericus'' contains illegal characters

Word 'Frens'' contains illegal characters

Word 'Fries'' contains illegal characters

Word 'Frits'' contains illegal characters

Word 'F�lix'' contains illegal characters

Word 'Ganesh'' contains illegal characters

Word 'gas-' contains illegal characters

Word 'Genesis'' contains illegal characters

Word 'George'' contains illegal characters

Word 'George'' contains illegal characters

Word 'Georges'' contains illegal characters

Word 'Georgios'' contains illegal characters

Word 'Georgius'' contains illegal characters

Word 'Gerardus'' contains illegal characters

Word 'Gerhardus'' contains illegal characters

Word 'Gertrudis'' contains illegal characters

Word 'Gies'' contains illegal characters

Word 'Gijs'' contains illegal characters

Word 'Gijsbertus'' contains illegal characters

Word 'Gilles'' contains illegal characters

Word 'Gillis'' contains illegal characters

Word 'Gladys'' contains illegal characters

Word 'Godefridus'' contains illegal characters

Word 'Goos'' contains illegal characters

Word 'Gradus'' contains illegal characters

Word 'Gregorius'' contains illegal characters

Word 'Gus'' contains illegal characters

Word 'Guus'' contains illegal characters

Word 'Hannes'' contains illegal characters

Word 'Hans'' contains illegal characters

Word 'Haris'' contains illegal characters

Word 'Harmannus'' contains illegal characters

Word 'Harris'' contains illegal characters

Word 'Hendricus'' contains illegal characters

Word 'Hendrikus'' contains illegal characters

Word 'Henricus'' contains illegal characters

Word 'Hermannus'' contains illegal characters

Word 'Hermanus'' contains illegal characters

Word 'Hieronymus'' contains illegal characters

Word 'Hubertus'' contains illegal characters

Word 'Ides'' contains illegal characters

Word 'Idris'' contains illegal characters

Word 'Idriss'' contains illegal characters

Word 'Ids'' contains illegal characters

Word 'Ignatius'' contains illegal characters

Word 'Ilias'' contains illegal characters

Word 'Ilyas'' contains illegal characters

Word 'in-' contains illegal characters

Word 'Ines'' contains illegal characters

Word 'Inez'' contains illegal characters

Word 'In�s'' contains illegal characters

Word 'Iris'' contains illegal characters

Word 'Isis'' contains illegal characters

Word 'Jacobus'' contains illegal characters

Word 'Jacques'' contains illegal characters

Word 'Jakobus'' contains illegal characters

Word 'James'' contains illegal characters

Word 'Janis'' contains illegal characters

Word 'Jannes'' contains illegal characters

Word 'Jannis'' contains illegal characters

Word 'Jans'' contains illegal characters

Word 'Janus'' contains illegal characters

Word 'Jarvis'' contains illegal characters

Word 'Jays'' contains illegal characters

Word 'Jazz'' contains illegal characters

Word 'Jens'' contains illegal characters

Word 'Jeremias'' contains illegal characters

Word 'Jeronimus'' contains illegal characters

Word 'Jess'' contains illegal characters

Word 'Jesus'' contains illegal characters

Word 'Jezus'' contains illegal characters

Word 'Jilles'' contains illegal characters

Word 'Jillis'' contains illegal characters

Word 'Joannes'' contains illegal characters

Word 'Joas'' contains illegal characters

Word 'Joes'' contains illegal characters

Word 'Johannes'' contains illegal characters

Word 'Johannis'' contains illegal characters

Word 'Johannus'' contains illegal characters

Word 'Jonas'' contains illegal characters

Word 'Joos'' contains illegal characters

Word 'Joris'' contains illegal characters

Word 'Jos'' contains illegal characters

Word 'Josephus'' contains illegal characters

Word 'Josh'' contains illegal characters

Word 'Jozias'' contains illegal characters

Word 'Jules'' contains illegal characters

Word 'Julius'' contains illegal characters

Word 'Justinus'' contains illegal characters

Word 'Justus'' contains illegal characters

Word 'Kars'' contains illegal characters

Word 'Kas'' contains illegal characters

Word 'Kays'' contains illegal characters

Word 'Kaz'' contains illegal characters

Word 'Kees'' contains illegal characters

Word 'Kes'' contains illegal characters

Word 'kijk-' contains illegal characters

Word 'Klaas'' contains illegal characters

Word 'Kobus'' contains illegal characters

Word 'Koos'' contains illegal characters

Word 'Kornelis'' contains illegal characters

Word 'Kors'' contains illegal characters

Word 'Kris'' contains illegal characters

Word 'kunst-' contains illegal characters

Word 'Lambertus'' contains illegal characters

Word 'land-' contains illegal characters

Word 'Lars'' contains illegal characters

Word 'Laurens'' contains illegal characters

Word 'Laurentius'' contains illegal characters

Word 'Laurus'' contains illegal characters

Word 'La�s'' contains illegal characters

Word 'Lennox'' contains illegal characters

Word 'Leonardus'' contains illegal characters

Word 'Leunis'' contains illegal characters

Word 'Lewis'' contains illegal characters

Word 'Lex'' contains illegal characters

Word 'Lies'' contains illegal characters

Word 'Lindsays'' contains illegal characters

Word 'Linus'' contains illegal characters

Word 'Lis'' contains illegal characters

Word 'Liz'' contains illegal characters

Word 'Loes'' contains illegal characters

Word 'Lois'' contains illegal characters

Word 'Lorenz'' contains illegal characters

Word 'Loris'' contains illegal characters

Word 'Lotus'' contains illegal characters

Word 'Louis'' contains illegal characters

Word 'Lourdes'' contains illegal characters

Word 'Lourens'' contains illegal characters

Word 'Lo�s'' contains illegal characters

Word 'Lubbertus'' contains illegal characters

Word 'Lucas'' contains illegal characters

Word 'Lucius'' contains illegal characters

Word 'Ludovicus'' contains illegal characters

Word 'Luis'' contains illegal characters

Word 'Luiz'' contains illegal characters

Word 'Lukas'' contains illegal characters

Word 'Lukasz'' contains illegal characters

Word 'Luus'' contains illegal characters

Word 'Lux'' contains illegal characters

Word 'Luz'' contains illegal characters

Word 'Maas'' contains illegal characters

Word 'Maddox'' contains illegal characters

Word 'Mads'' contains illegal characters

Word 'Magnus'' contains illegal characters

Word 'Maks'' contains illegal characters

Word 'Mannes'' contains illegal characters

Word 'Mans'' contains illegal characters

Word 'Manus'' contains illegal characters

Word 'Marcelis'' contains illegal characters

Word 'Marcellus'' contains illegal characters

Word 'Marcos'' contains illegal characters

Word 'Marcus'' contains illegal characters

Word 'Marinus'' contains illegal characters

Word 'Maris'' contains illegal characters

Word 'Marius'' contains illegal characters

Word 'Markus'' contains illegal characters

Word 'Marlies'' contains illegal characters

Word 'Marloes'' contains illegal characters

Word 'Marlous'' contains illegal characters

Word 'Marnix'' contains illegal characters

Word 'Martinus'' contains illegal characters

Word 'Mas'' contains illegal characters

Word 'Matheus'' contains illegal characters

Word 'Mathias'' contains illegal characters

Word 'Mathijs'' contains illegal characters

Word 'Mathis'' contains illegal characters

Word 'Matias'' contains illegal characters

Word 'Matijs'' contains illegal characters

Word 'Matiz'' contains illegal characters

Word 'Mats'' contains illegal characters

Word 'Matte�s'' contains illegal characters

Word 'Mattheus'' contains illegal characters

Word 'Matthe�s'' contains illegal characters

Word 'Matthias'' contains illegal characters

Word 'Matthijs'' contains illegal characters

Word 'Matthys'' contains illegal characters

Word 'Matth��s'' contains illegal characters

Word 'Mattias'' contains illegal characters

Word 'Mattijs'' contains illegal characters

Word 'Mattis'' contains illegal characters

Word 'Matz'' contains illegal characters

Word 'Mauritius'' contains illegal characters

Word 'Maurits'' contains illegal characters

Word 'Mauritz'' contains illegal characters

Word 'Mavis'' contains illegal characters

Word 'Max'' contains illegal characters

Word 'Maximus'' contains illegal characters

Word 'Mays'' contains illegal characters

Word 'Mees'' contains illegal characters

Word 'Meeuwis'' contains illegal characters

Word 'Meis'' contains illegal characters

Word 'Melis'' contains illegal characters

Word 'Mels'' contains illegal characters

Word 'Mercedes'' contains illegal characters

Word 'Mex'' contains illegal characters

Word 'Mexx'' contains illegal characters

Word 'Midas'' contains illegal characters

Word 'Mies'' contains illegal characters

Word 'Mijs'' contains illegal characters

Word 'Miles'' contains illegal characters

Word 'Milos'' contains illegal characters

Word 'Mingus'' contains illegal characters

Word 'Moos'' contains illegal characters

Word 'Moritz'' contains illegal characters

Word 'Morris'' contains illegal characters

Word 'Moses'' contains illegal characters

Word 'Moulays'' contains illegal characters

Word 'Mozes'' contains illegal characters

Word 'Nargis'' contains illegal characters

Word 'Nash'' contains illegal characters

Word 'Nelis'' contains illegal characters

Word 'Nias'' contains illegal characters

Word 'Nicholas'' contains illegal characters

Word 'Nicolaas'' contains illegal characters

Word 'Nicolas'' contains illegal characters

Word 'Nicolays'' contains illegal characters

Word 'Niels'' contains illegal characters

Word 'Nijs'' contains illegal characters

Word 'Niklas'' contains illegal characters

Word 'Nikolaas'' contains illegal characters

Word 'Nikolaos'' contains illegal characters

Word 'Nikos'' contains illegal characters

Word 'Nils'' contains illegal characters

Word 'Norbertus'' contains illegal characters

Word 'Oktays'' contains illegal characters

Word 'Otis'' contains illegal characters

Word 'Paige'' contains illegal characters

Word 'Paris'' contains illegal characters

Word 'Patricius'' contains illegal characters

Word 'Paulus'' contains illegal characters

Word 'Pebbles'' contains illegal characters

Word 'Petrus'' contains illegal characters

Word 'Philippus'' contains illegal characters

Word 'Phoenix'' contains illegal characters

Word 'Phyllis'' contains illegal characters

Word 'Precious'' contains illegal characters

Word 'Princess'' contains illegal characters

Word 'Quintus'' contains illegal characters

Word 'Quirinus'' contains illegal characters

Word 'Ramses'' contains illegal characters

Word 'Rasmus'' contains illegal characters

Word 'Rays'' contains illegal characters

Word 'Rens'' contains illegal characters

Word 'Renz'' contains illegal characters

Word 'Rex'' contains illegal characters

Word 'Rhys'' contains illegal characters

Word 'Ridge'' contains illegal characters

Word 'Rieks'' contains illegal characters

Word 'Rients'' contains illegal characters

Word 'Ries'' contains illegal characters

Word 'Rikus'' contains illegal characters

Word 'Rinus'' contains illegal characters

Word 'Robertus'' contains illegal characters

Word 'Rochus'' contains illegal characters

Word 'Roos'' contains illegal characters

Word 'Ross'' contains illegal characters

Word 'Rudolphus'' contains illegal characters

Word 'Rufus'' contains illegal characters

Word 'Santos'' contains illegal characters

Word 'Satish'' contains illegal characters

Word 'Sebas'' contains illegal characters

Word 'Sebastianus'' contains illegal characters

Word 'Senays'' contains illegal characters

Word 'Servaas'' contains illegal characters

Word 'Shays'' contains illegal characters

Word 'Silas'' contains illegal characters

Word 'Sjors'' contains illegal characters

Word 'Stanislas'' contains illegal characters

Word 'Stans'' contains illegal characters

Word 'Stefanus'' contains illegal characters

Word 'Stephanus'' contains illegal characters

Word 'stroomaf-' contains illegal characters

Word 'stroomop-' contains illegal characters

Word 'Sus'' contains illegal characters

Word 'Suus'' contains illegal characters

Word 'Teis'' contains illegal characters

Word 'Tes'' contains illegal characters

Word 'Tess'' contains illegal characters

Word 'Teunis'' contains illegal characters

Word 'Teus'' contains illegal characters

Word 'Tex'' contains illegal characters

Word 'Theodorus'' contains illegal characters

Word 'Theunis'' contains illegal characters

Word 'Thies'' contains illegal characters

Word 'Thijs'' contains illegal characters

Word 'Thomas'' contains illegal characters

Word 'Thys'' contains illegal characters

Word 'Ties'' contains illegal characters

Word 'Tijs'' contains illegal characters

Word 'Timote�s'' contains illegal characters

Word 'Tinus'' contains illegal characters

Word 'Titus'' contains illegal characters

Word 'Tobias'' contains illegal characters

Word 'Tomas'' contains illegal characters

Word 'Tomasz'' contains illegal characters

Word 'Tom�s'' contains illegal characters

Word 'Tonnis'' contains illegal characters

Word 'Toos'' contains illegal characters

Word 'Tos'' contains illegal characters

Word 'Travis'' contains illegal characters

Word 'Trees'' contains illegal characters

Word 'Trix'' contains illegal characters

Word 'Truus'' contains illegal characters

Word 'Turks-' contains illegal characters

Word 'Vangelis'' contains illegal characters

Word 'Vijays'' contains illegal characters

Word 'Vincentius'' contains illegal characters

Word 'Vins'' contains illegal characters

Word 'Vos'' contains illegal characters

Word 'Walterus'' contains illegal characters

Word 'Wannes'' contains illegal characters

Word 'Wens'' contains illegal characters

Word 'Wes'' contains illegal characters

Word 'Wies'' contains illegal characters

Word 'Wilders'' contains illegal characters

Word 'Wilhelmus'' contains illegal characters

Word 'Willebrordus'' contains illegal characters

Word 'Willibrordus'' contains illegal characters

Word 'Yannis'' contains illegal characters

Word 'Yilmaz'' contains illegal characters

Word 'Younes'' contains illegal characters

Word 'Youness'' contains illegal characters

Word 'Yunus'' contains illegal characters

Word 'Yves'' contains illegal characters

Word 'Zacharias'' contains illegal characters

