import {
  createClient as createContentfulClient,
  type Asset,
  type Entry,
  type EntryFieldTypes,
} from "contentful";

// ---------------------------------------------------------------------------
// Contentful field type definitions
// These must match the Content Model you define in the Contentful web app.
// ---------------------------------------------------------------------------

/**
 * A single song belonging to an album.
 * Contentful content type ID: "song"
 */
export interface SongSkeleton {
  contentTypeId: "song";
  fields: {
    title: EntryFieldTypes.Text;
    lyrics: EntryFieldTypes.Text;
  };
}

/**
 * A music single / album entry.
 * Contentful content type ID: "album"
 *
 * Field mapping (Contentful → site):
 *   slug        → used as the URL segment (e.g. "trop-flou")
 *   title       → display title
 *   coverImage  → Media asset (image)
 *   spotifyUrl  → external link to Spotify / bfan
 *   songs       → array of linked Song entries
 */
export interface AlbumSkeleton {
  contentTypeId: "album";
  fields: {
    slug: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    coverImage: EntryFieldTypes.AssetLink;
    spotifyUrl: EntryFieldTypes.Text;
    songs: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<SongSkeleton>>;
  };
}

// ---------------------------------------------------------------------------
// Client
// ---------------------------------------------------------------------------

function createClient() {
  const spaceId = import.meta.env.CONTENTFUL_SPACE_ID;
  const accessToken = import.meta.env.CONTENTFUL_ACCESS_TOKEN;

  if (!spaceId || !accessToken) {
    throw new Error(
      "Missing Contentful environment variables. " +
        "Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in your .env file."
    );
  }

  return createContentfulClient({ space: spaceId, accessToken });
}

// Singleton — reused across all build-time calls.
export const contentfulClient = createClient();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Returns all album entries, ordered by creation date (newest first).
 * Includes linked Song entries in the same request (resolveIncludes: 1 by default).
 */
export async function getAlbums() {
  const response = await contentfulClient.getEntries<AlbumSkeleton>({
    content_type: "album",
    order: ["-sys.createdAt"],
    include: 1,
  });

  return response.items;
}

/**
 * Returns a single album by its slug field, or `undefined` if not found.
 */
export async function getAlbumBySlug(slug: string) {
  const response = await contentfulClient.getEntries<AlbumSkeleton>({
    content_type: "album",
    "fields.slug": slug,
    limit: 1,
    include: 1,
  });

  return response.items[0];
}

/**
 * Controls the promo modal that appears on page load.
 * Contentful content type ID: "promoModal"
 *
 * There should be exactly one entry of this type in Contentful.
 * Toggle "isActive" to show/hide the modal without touching the code.
 */
export interface PromoModalSkeleton {
  contentTypeId: "promoModal";
  fields: {
    isActive: EntryFieldTypes.Boolean;
    album: EntryFieldTypes.EntryLink<AlbumSkeleton>;
  };
}

// ---------------------------------------------------------------------------
// Mapper — converts a Contentful entry to the plain Album shape used in templates
// ---------------------------------------------------------------------------

export interface MappedSong {
  title: string;
  lyrics: string;
}

export interface MappedAlbum {
  id: string;
  title: string;
  coverImage: string;
  spotifyUrl: string;
  songs: MappedSong[];
}

/**
 * Returns the promo modal config, or `null` if none exists or it is inactive.
 * Resolves the linked album entry in the same request.
 */
export async function getPromoModal(): Promise<MappedAlbum | null> {
  const response = await contentfulClient.getEntries<PromoModalSkeleton>({
    content_type: "promoModal",
    limit: 1,
    include: 2,
  });

  const entry = response.items[0];
  if (!entry || !entry.fields.isActive) return null;

  const albumEntry = entry.fields.album as Entry<AlbumSkeleton>;
  if (!albumEntry?.fields) return null;

  return mapAlbum(albumEntry);
}

/**
 * Converts a raw Contentful Album entry into a plain object that matches the
 * shape previously defined in src/data/albums.ts, so templates need minimal changes.
 */
export function mapAlbum(entry: Entry<AlbumSkeleton>): MappedAlbum {
  const asset = entry.fields.coverImage as Asset;
  const coverImage = asset?.fields?.file?.url
    ? `https:${asset.fields.file.url}`
    : "";

  const songs = ((entry.fields.songs ?? []) as Entry<SongSkeleton>[]).map(
    (song) => ({
      title: song.fields.title as string,
      lyrics: song.fields.lyrics as string,
    })
  );

  return {
    id: entry.fields.slug as string,
    title: entry.fields.title as string,
    coverImage,
    spotifyUrl: entry.fields.spotifyUrl as string,
    songs,
  };
}
