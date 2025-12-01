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
    id: "pain-sandwich",
    title: "Pain Sandwich",
    coverImage: "https://res.cloudinary.com/dxyvj8rka/image/upload/v1764549950/Aujo/painsandwich_aujo_tcr1ia.jpg",
    spotifyUrl: "https://bfan.link/pain-sandwich",
    songs: [
      {
        title: "Pain Sandwich",
        lyrics: `La table est mise, ta chaise est vide 
Le bain est rempli d’bottes d’hiver 
On rit ben fort, mais c’est pas facile 
Car cette année il manque une paire 

J’ai pensé faire un pain sandwich 
Pour me mettre dans le mood 
La parade avance 
Mais d’mon coté y’a rien qui bouge 
J’me cacherais dans un coin
En attendant qu’quelqu’un me trouve
J’sais ben qu’t’es plus là
Mais j’joue encore à cherche et trouve

Les lumières s’allument, mais une reste éteinte 
J’m’en aperçois entre deux bouchées de tourtière
C’est toi l’ange sur le top du sapin 
Les années passent, j’arrive pas à m’y faire 

J’ai pensé faire un pain sandwich 
Pour me mettre dans le mood 
La parade avance 
Mais d’mon coté y’a rien qui bouge 
J’me cacherais dans un coin
En attendant qu’quelqu’un me trouve
J’sais ben qu’t’es plus là
Mais j’joue encore à cherche et trouve

J’ai pensé faire un pain sandwich 
Pour me mettre dans le mood 
La parade avance 
Mais d’mon coté y’a rien qui bouge 
J’me cacherais dans un coin
En attendant qu’quelqu’un me trouve
J’sais ben qu’t’es plus là
Mais j’joue encore à cherche et trouve`
      }
    ]
  },
  {
    id: "all-of-your-love",
    title: "All of your love",
    coverImage: "https://res.cloudinary.com/dxyvj8rka/image/upload/v1761279160/Aujo/all-of-your-love_kvvrli.jpg",
    spotifyUrl: "https://bfan.link/all-of-your-love",
    songs: [
      {
        title: "All of your love",
        lyrics: `I bet that you don’t care
I know it’s been a couple years now
Life is so unfair
If only you could meet me where
Where we used to lay every single night
You were holding my body so so tight
We were dancing like there’s no tomorrow
Now I’m staring at the ceiling and I miss you so

Give me give me give me
All of your love
I need to feel it feel it
I can’t get enough
Stay a little little longer
I’ll make you feel right
Pull me closer closer closer
T’il the end of the night

You were everything to me
And you’re still the one as the years go by
But we went separate ways
It kills me everyday
Cause we were two sick kids learning how to survive
In this crazy world, in this wild wild life
We were singing out loud to the radio
Now I’m sitting by the phone and I can’t let go

Give me give me give me
All of your love
I need to feel it feel it
I can’t get enough
Stay a little little longer
I’ll make you feel right
Pull me closer closer closer
T’il the end of the night`
      }
    ]
  },
  {
    id: "nulle-part",
    title: "Nulle part",
    coverImage: "https://res.cloudinary.com/dxyvj8rka/image/upload/f_auto,q_auto/v1/Aujo/nulle_part_aujo_jkj1wh",
    spotifyUrl: "https://bfan.link/nulle-part-1",
    songs: [
      {
        title: "Nulle part",
        lyrics: `Deux éclats d’azur qui hantent mes nuits
Oh tu sais combien j’aime ça when it gets flirty
Une image vaut mille mots
Mais j’suis bouche bée
Devant ta photo
Damn I love the game we play

When you’re out of the town
Tu me textes et ça déraille
Dépourvu de mes sens
Mon cœur naïf s’emballe
Tu Shakes , shakes it up
Ma planète et tu repars
Partout dans mon phone
Quand j’lève les yeux t’es nulle part
(Nulle part)

C’est blurry mes doigts cherchent ton nom
Un autre drunk text qui va fly dans ta boîte de réception
Jsuis sur une genre de mission
J’aime quand tu penses à moi
Et j’sais qu’taimes ça quand j’pense à toi

When you’re out of the town
Tu me textes et ça déraille
Dépourvu de mes sens
Mon cœur naïf s’emballe
Tu Shakes , shakes it up
Ma planète et tu repars
Partout dans mon phone
Quand j’lève les yeux t’es nulle part
(Nulle part)

Nulle part , nulle part , nulle part`
      }
    ]
  },
  {
    id: "les-femmes",
    title: "Les femmes",
    coverImage: "https://res.cloudinary.com/dxyvj8rka/image/upload/f_auto,q_auto/v1/Aujo/mhes4eadejyc6xlc08wa",
    spotifyUrl: "https://bfan.link/les-femmes-1",
    songs: [
      {
        title: "Les femmes",
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