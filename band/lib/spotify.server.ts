// spotify.server.ts
// Removed — this project uses static album data and local images.
// If you want server-side Spotify fetching in the future, re-enable a safe helper that
// guards against missing env vars and only runs when SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET
// are configured.

export function fetchArtistAlbums() {
  throw new Error('Spotify helper has been removed. Use static data in FeaturedReleases or enable Spotify integration.')
}

export function fetchArtistTopTracks() {
  throw new Error('Spotify helper has been removed. Use static data in FeaturedReleases or enable Spotify integration.')
}