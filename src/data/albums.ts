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
];