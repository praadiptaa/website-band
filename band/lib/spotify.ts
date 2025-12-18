// spotify.ts
// Removed — using static releases/local images instead of runtime Spotify API.
// If you want dynamic fetching later, reintroduce a server-only helper and protect against
// missing environment variables.

export function fetchArtistAlbums() {
  throw new Error('Spotify helper removed. Use static data in FeaturedReleases or enable Spotify integration.')
}

export function fetchArtistTopTracks() {
  throw new Error('Spotify helper removed. Use static data in FeaturedReleases or enable Spotify integration.')
}
