# The Samo — Website

Situs sederhana untuk band "The Samo" — scaffold Next.js (App Router) + TypeScript + Tailwind.

## Setup

1. Install dependencies:

   npm install

2. Jalankan development server:

   npm run dev

3. Build untuk produksi:

   npm run build && npm run start

## Catatan
- Spotify artist embed sudah tersedia di homepage via `SpotifyEmbed` (artist id: `1t1eZu4FSD62zDYeCnfGVU`).
- Update konten (bio, tour, gambar) bisa dilakukan di komponen atau ditambahkan CMS nanti.

## Next steps
- Tambah contact form (serverless/email)
- Integrasi CMS jika mau bisa update konten dari non-dev
- Styling, SEO, Open Graph, dan accessibility improvements

## Spotify API integration
To pull real album covers and release data from Spotify you need to create a Spotify app and set the following environment variables in a `.env.local` file in the project root:

```
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
```

This project uses static release data and local images (placed in `public/images/`). I removed the Spotify helper; provide album images in `public/images/` (e.g. `enigma.jpeg`, `extrafine.png`) to update releases.
