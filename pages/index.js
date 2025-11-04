import Head from 'next/head';
import { useEffect } from 'react';

const members = [
  {
    name: 'Noxy6a6y',
    role: 'Founder // Owner',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    bio: 'Producer and visionary behind SCM. Architect of the collective\'s dark energy.',
    link: 'https://instagram.com/'
  },
  {
    name: 'SCM Fresh',
    role: 'Artist',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    bio: 'Genre-blurring artist fusing trap grit with cinematic melodies.',
    link: 'https://instagram.com/'
  },
  {
    name: 'Josh Void',
    role: 'Producer',
    image:
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=800&q=80',
    bio: 'Sound designer sculpting void-born textures and futuristic drums.',
    link: 'https://instagram.com/'
  },
  {
    name: 'HBK Halo',
    role: 'Artist',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    bio: 'Melodic assassin with an angelic falsetto and hell-born pen.',
    link: 'https://instagram.com/'
  },
  {
    name: 'Brizz',
    role: 'Designer',
    image:
      'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80',
    bio: 'Visual designer crafting SCM\'s neon-soaked world and identity.',
    link: 'https://instagram.com/'
  }
];

const musicLinks = [
  {
    platform: 'SoundCloud',
    url: 'https://soundcloud.com',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/platform/sin-city-sessions-vol-1&color=%23e50914&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  },
  {
    platform: 'Spotify',
    url: 'https://open.spotify.com',
    embed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator'
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com',
    embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

const galleryImages = [
  'https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1518895949257-7621c3c786d4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80'
];

const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://instagram.com',
    path: 'M7 2C4.243 2 2 4.243 2 7v6c0 2.757 2.243 5 5 5h6c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h6c1.654 0 3 1.346 3 3v6c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 1a1 1 0 100 2 1 1 0 000-2zM10 7a3 3 0 100 6 3 3 0 000-6z'
  },
  {
    label: 'YouTube',
    url: 'https://youtube.com',
    path: 'M21.8 8.001a2.75 2.75 0 00-1.93-1.94C18.25 5.5 12 5.5 12 5.5s-6.25 0-7.87.56A2.75 2.75 0 002.2 8.001C1.65 9.623 1.65 12 1.65 12s0 2.377.55 3.999a2.75 2.75 0 001.93 1.94c1.62.56 7.87.56 7.87.56s6.25 0 7.87-.56a2.75 2.75 0 001.93-1.94C22.35 14.377 22.35 12 22.35 12s0-2.377-.55-3.999zM9.75 14.5v-5l5 2.5-5 2.5z'
  },
  {
    label: 'TikTok',
    url: 'https://tiktok.com',
    path: 'M16 8.29c1.14.83 2.54 1.3 4.05 1.3V6.7c-.2.02-.39.03-.59.03-1.34 0-2.58-.42-3.6-1.14V15c0 2.9-2.35 5.25-5.25 5.25S5.35 17.9 5.35 15s2.35-5.25 5.25-5.25c.2 0 .39.01.58.03v3.18a2.13 2.13 0 00-.58-.08 2.17 2.17 0 00-2.17 2.17 2.17 2.17 0 102.17 2.17c1.2 0 2.17-.97 2.17-2.17V2.75h3.5c0 1.93 1.57 3.5 3.5 3.5v2.04c-.79-.09-1.54-.33-2.23-.7V8.29z'
  }
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    const animatedSections = document.querySelectorAll('[data-animate]');
    animatedSections.forEach((section) => observer.observe(section));

    const nav = document.querySelector('.nav');
    if (nav) {
      requestAnimationFrame(() => nav.classList.add('in-view'));
    }

    const handleScroll = () => {
      if (!nav) return;
      if (window.scrollY > 80) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>SinCityMafia (SCM) — Independent Creative Collective</title>
        <meta
          name="description"
          content="SinCityMafia (SCM) is an independent collective of artists, producers, and designers united by dark energy and relentless ambition."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="nav" data-animate>
        <div className="nav__brand">SCM</div>
        <nav className="nav__links">
          <a href="#about">About</a>
          <a href="#members">Members</a>
          <a href="#music">Music</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="landing" className="landing" data-animate>
          <div className="landing__overlay" />
          <div className="landing__content">
            <div className="logo">SCM</div>
            <p className="tagline">Independent Creative Collective // est. 444.</p>
            <a href="#about" className="cta">Enter the Mafia</a>
          </div>
        </section>

        <section id="about" className="about" data-animate>
          <div className="section-heading">
            <span className="symbol">444</span>
            <h2>About SinCityMafia</h2>
          </div>
          <p>
            SinCityMafia (SCM) is an independent collective uniting artists, producers, and designers under one
            vision — dark energy, pure creation, and relentless ambition.
          </p>
        </section>

        <section id="members" className="members" data-animate>
          <div className="section-heading">
            <h2>Members</h2>
            <span className="divider" />
          </div>
          <div className="member-grid">
            {members.map((member) => (
              <article key={member.name} className="member-card">
                <div className="member-image" style={{ backgroundImage: `url(${member.image})` }} />
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
                <div className="member-overlay">
                  <p>{member.bio}</p>
                  <a href={member.link} target="_blank" rel="noreferrer">
                    Connect
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="music" className="music" data-animate>
          <div className="section-heading">
            <h2>Sound of the Mafia</h2>
            <span className="divider" />
          </div>
          <div className="music-grid">
            {musicLinks.map((item) => (
              <div key={item.platform} className="music-card">
                <h3>{item.platform}</h3>
                <div className="player">
                  <iframe
                    src={item.embed}
                    title={item.platform}
                    width="100%"
                    height="200"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="teaser-card">
            <div className="teaser-content">
              <h3>Sin City Sessions Vol. 1</h3>
              <p>Preview the upcoming sonic journey forged in the neon haze of Las Vegas nights.</p>
              <button type="button">Play Teaser</button>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery" data-animate>
          <div className="section-heading">
            <h2>Visual Archives</h2>
            <span className="divider" />
          </div>
          <div className="gallery-grid">
            {galleryImages.map((src, index) => (
              <div key={src} className={`gallery-item gallery-item-${index % 3}`} style={{ backgroundImage: `url(${src})` }} />
            ))}
          </div>
        </section>

        <section id="contact" className="contact" data-animate>
          <div className="section-heading">
            <h2>Join the Syndicate</h2>
            <span className="divider" />
          </div>
          <div className="contact-grid">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="How can we build together?" required />
              </div>
              <button type="submit">Send Transmission</button>
            </form>
            <div className="contact-info">
              <p>Stay connected with the collective. Follow SCM across all channels.</p>
              <div className="socials">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noreferrer" aria-label={link.label}>
                    <span className="icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d={link.path} />
                      </svg>
                    </span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" data-animate>
        <p>© 2025 SinCityMafia. All Rights Reserved.</p>
        <p>Powered by 444.</p>
      </footer>
    </>
  );
}
