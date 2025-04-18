export interface Song {
  title: string;
  lyrics: string;
}

export interface Album {
  id: string;
  title: string;
  coverImage: string;
  spotifyUrl: string;
  songs: Song[];
}

export const albums: Album[] = [
  {
    id: "les-femmes",
    title: "Les Femmes",
    coverImage: "https://res.cloudinary.com/dxyvj8rka/image/upload/f_auto,q_auto/v1/Aujo/mhes4eadejyc6xlc08wa",
    spotifyUrl: "https://bfan.link/les-femmes-1",
    songs: [
      {
        title: "Les Femmes",
        lyrics: `On m’a demandé un beat catchy pour la radio
Que mon kick, mon snare te rendent esclave de mon tempo
Loin de là, l’intention de te retenir
Mais ton histoire m’attire
Reste un peu, je commence à peine à te lire
Sous les spotlights, deux soulmates se rencontrent
Les signes sont trop clairs même dans la pénombre
Please, attrape-moi avant que je tombe
Pour toi, pour toi

J’ai entendu que toutes les femmes savent danser (danser)
Y’en a pas deux comme toi
J’ai pris trop de temps à trouver (trouver)
Même si c’était vrai que toutes les femmes savent danser (danser)
Y’a juste toi qui blow my mind
You take me up, up and away

I wanna say it out loud
You’re all I think about
Viens-tu souvent ici?
Sorry pour ma mauvaise pick-up line
J’vais pas te mentir, je ne fais que suivre le flow
J’te veux collée à moi comme les tattoos sur ma peau
Ma sleeve raconte mon histoire
J’t’avoue que j’ai un peu peur de te décevoir
On dit que pour l’âme, les yeux sont le miroir
Mes yeux verts sont rivés sur toi

J’ai entendu que toutes les femmes savent danser (danser)
Y’en a pas deux comme toi
J’ai pris trop de temps à trouver (trouver)
Même si c’était vrai que toutes les femmes savent danser (danser)
Y’a juste toi qui blow my mind
You take me up, up and away

Breath away, you take my breath away
Breath away, you take my breath away`
      }
    ]
  },
  {
    id: "la-derniere",
    title: "La dernière",
    coverImage: "https://res.cloudinary.com/dxyvj8rka/image/upload/v1739971654/Aujo/krctyn0gejpupks8h0nj.jpg?q=80&w=2070",
    spotifyUrl: "https://bfan.link/la-derniere",
    songs: [
      {
        title: "La dernière",
        lyrics: `Tu m'utilisais pour tes devoirs d'université,
J'avoue, j'ai rien vu venir,
Shame on me
Je croyais que tes malices du passé
Avaient décidé de s'enfuir
Ohhh,
Dommage, ta mère m'aimait bien,
Elle m'écoutait à la radio
Scander mes peines d'amour
Et mes états d'âme moroses

T'es la, t'es la dernière à m'avoir
Dorénavant, j'vais me méfier de ce regard
It's a shame that I still miss you sometimes
T'es la, t'es la dernière
Au revoir

Okay, round two.
T'es comme la shisha :
Je dis jamais non, même si, au fond, j'aime pas ça.
Comme un tool,
Tu t'es servi de moi.
Am I a fool ?
La marionnette au bout de tes doigts.
J'te souhaite pas de mal,
Non, c'est pas mon genre.
Le karma fait sa loi,
C'est une question de temps.

T'es la, t'es la dernière à m'avoir
Dorénavant, j'vais me méfier de ce regard
It's a shame that I still miss you sometimes
T'es la, t'es la dernière
Au revoir

It's your loss, baby,
Tu perds, je gagne.
Y'a 10 ans, j'étais faite pour toi,
Le futur a d'autres plans pour moi.
Ce beat est la trame sonore
Qui marque la fin de notre histoire.
On a changé, on a tué la magie.
Sans rancune, 3, 2, 1…
Je t'oublie

T'es la, t'es la dernière à m'avoir
Dorénavant, j'vais me méfier de ce regard
It's a shame that I still miss you sometimes
T'es la, t'es la dernière
Au revoir`
      }
    ]
  }
  
  /*,
  {
    id: "laube-nouvelle",
    title: "L'Aube Nouvelle",
    coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070",
    spotifyUrl: "https://open.spotify.com/album/placeholder2",
    songs: [
      {
        title: "L'Aube Nouvelle",
        lyrics: `Verse 1
L'horizon s'éveille doucement
Les premiers rayons du soleil
Touchent la terre tendrement
Un nouveau jour sans pareil

Chorus
L'aube nouvelle nous appelle
Vers des chemins inconnus
L'aube nouvelle étincelle
De promesses revenues`
      },
      {
        title: "Premier Rayon",
        lyrics: `Verse 1
La brume se dissipe enfin
Sur les collines endormies
Le jour reprend son refrain
Dans une douce mélodie

Chorus
Premier rayon de lumière
Qui traverse l'horizon
Premier souffle de la terre
Qui nous donne sa chanson`
      }
    ]
  },
  {
    id: "le-dernier-voyage",
    title: "Le Dernier Voyage",
    coverImage: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=2013",
    spotifyUrl: "https://open.spotify.com/album/placeholder3",
    songs: [
      {
        title: "Le Dernier Voyage",
        lyrics: `Verse 1
Sur les routes infinies
Le voyage nous transforme
Les paysages défilent
Le temps prend d'autres formes

Chorus
C'est le dernier voyage
Vers l'horizon lointain
C'est le dernier passage
Vers un nouveau destin`
      },
      {
        title: "L'Horizon",
        lyrics: `Verse 1
La ligne bleue se dessine
Entre le ciel et la mer
Nos rêves s'illuminent
Dans ce monde éphémère

Chorus
L'horizon nous appelle
De sa voix lointaine
Une danse éternelle
Sur la mer sereine`
      }
    ]
  } */
];