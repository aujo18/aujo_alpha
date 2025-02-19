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
    id: "dans-la-nuit",
    title: "Dans la Nuit",
    coverImage: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070",
    spotifyUrl: "https://open.spotify.com/album/placeholder",
    songs: [
      {
        title: "Dans la Nuit",
        lyrics: `Verse 1
Dans la nuit silencieuse
Les étoiles brillent pour nous
Le temps s'arrête, précieuse
Cette mélodie entre nous

Chorus
Dans la nuit, dans la nuit
Nos rêves prennent leur envol
Dans la nuit, dans la nuit
La musique nous console`
      },
      {
        title: "Rêverie Nocturne",
        lyrics: `Verse 1
Les ombres dansent ce soir
Sur les murs de la ville
Nos cœurs pleins d'espoir
Dans ce moment tranquille

Chorus
La nuit nous appartient
Les étoiles sont nos guides
Tout devient si lointain
Dans ce moment limpide`
      }
    ]
  },
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
  }
];