'use client'

export default function SpotifyEmbed({ artistId }: { artistId: string }) {
  const src = `https://open.spotify.com/embed/artist/${artistId}`
  return (
    <div className="w-full max-w-xl">
      <iframe
        src={src}
        width="100%"
        height="380"
        frameBorder="0"
        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Embed"
      />
    </div>
  )
}
