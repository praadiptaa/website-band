export default function About() {
  return (
    <section className="py-8">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/3 flex-shrink-0">
          <img src="https://i.scdn.co/image/ab676161000051741e59328f4658dbefde1ba074" alt="Enigma cover" className="w-full rounded shadow-lg" />
        </div>

        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-cream">About</h1>

          <p className="mt-4 text-muted leading-relaxed">
            The Samo are a rock outfit from Malang, Indonesia, channeling an urgent, cinematic sound they call "Rambling Shout" and "Chaotic Rock." Their music blends raw guitar riffs and dense sonic textures with emotionally charged vocals—music built to feel as lived-in as it is theatrical.
          </p>

          <p className="mt-4 text-muted leading-relaxed">
            With releases like <em>Extrafine Lunatic</em> and the latest album <em>Enigma</em>, The Samo move between blistering intensity and dark, melodic passages. Tracks such as “Paralyzed” and “Stygian” showcase their knack for marrying visceral energy with memorable hooks.
          </p>

          <p className="mt-4 text-muted leading-relaxed">
            The band plays locally and on regional stages, bringing a high-energy live show that mirrors their recorded heft. Follow The Samo on Spotify and social channels for new releases and tour dates — or head to the Contact page to book a show or request press assets.
          </p>
        </div>
      </div>
    </section>
  )
}
