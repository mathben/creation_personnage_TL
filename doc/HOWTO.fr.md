Introduction
============
Ce guide a été écris dans un contexte que le logiciel s'exécute sans problème et le tout est bien configuré. Au stade du présent logiciel, il faut des connaissances techniques pour modifier du HTML qui permet de modifier le contenu du site et des connaissances de Javascript pour adapter les règles de la fiche de personnage.

Utilisateur admin à créer
-------------------------
Lorsqu'on démarre le logiciel pour la première fois, il ne contient pas d'utilisateur. Utilisez l'interface pour inscrire votre premier utilisateur. Fermer le service, modifier le fichier `database/tl_user.json` et modifier la permission de "Joueur" à "Admin". Rouvrez le service et vous voilà administrateur.

Logo à modifier
---------------
Voir les images dans `src/web/resources/icon`.
Il faut changer le favicon. Sinon les autres images par défaut se retrouvent sur la page `news.html`.

Pages à modifier
----------------
Les pages HTML modifiables sont dans `src/web/partials`. `_base.html` inclus les autres pages web incluant le menu de la navigation. Il y a la même page dans le répertoire admin.

Les pages HTML sont générés par Tornado, une plateforme web en Python, ils contiennent des conditions entre les balises comme lorsqu'on fait du PHP.

Modifier le nom du GN sur les pages suivantes :

- src/web/partials/_base.html
- src/web/partials/lore.html
- src/web/partials/manual.html
- src/web/partials/news.html
- src/web/partials/admin/_base.html
- src/web/partials/admin/news.html

Modifier le contenu de la page d'accueil pour les joueurs :
- src/web/partials/news.html

Règles à modifier
-----------------
TODO il faut créer une authentification à Google Drive dans le fichier `database/client_secret.json`

Aller dans la section `Admin/Éditeur`, il faut mettre un URL vers un fichier Google Spreadsheet. Créer un nouveau document et mettre le lien dans le `URL du fichier`. Suivez les instructions pour donner les permissions.

Dans le fichier, ajouter :

- feuille `manual` avec première ligne `Level;Admin;Key;Title;Description;Bullet Description;Second Bullet Description;Under Level Color;Sub Key;Model;Point;HidePlayer`
- feuille `lore` avec première ligne `Level;Admin;Key;Title;Description;Bullet Description;Second Bullet Description;Under Level Color;Sub Key;Model;Point;HidePlayer`
- feuille `schema_user` avec première ligne `Level;Name;Type;Title;minLength;pattern;required;minItems;maxItems;uniqueItems;Description`
- feuille `schema_char` avec première ligne `Level;Name;Type;Title;minLength;pattern;required;minItems;maxItems;uniqueItems;Description`
- feuille `form_user` avec première ligne `Level;Admin;Key;Placeholder;Type;Options;Value;Name;Category;Add;Style;Model;ReadByPlayer;ReadOnlyPlayer`
- feuille `form_char` avec première ligne `Level;Admin;Key;Placeholder;Type;Options;Value;Name;Category;Add;Style;Model;ReadByPlayer;ReadOnlyPlayer`

