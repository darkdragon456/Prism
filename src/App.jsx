import React, { useState, useEffect } from 'react'
import QRModal from './components/QRModal'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [qrOpen, setQrOpen] = useState(false)
  const [qrValue, setQrValue] = useState('')
  const [qrLabel, setQrLabel] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])
  
  const whatsappNumber = '919021436667'
  const bookSmallMsg = encodeURIComponent('Hello, I want to book the Small Screen package (6x4) for ₹1,200. Please share availability.')
  const bookBigMsg = encodeURIComponent('Hello, I want to book the Big Screen package (8x6) for ₹1,500. Please share availability.')
  const bookPAonlyMsg = encodeURIComponent('Hello, I want to book the PA System (2 speakers) for ₹3,000. Please share availability.')
  const bookPAPkgMsg = encodeURIComponent('Hello, I want to book the PA + Big Screen package (PA with 2 speakers + 8x6 projector) for ₹4,500. Please share availability.')
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <img src="/logo.svg" alt="PRISM" className="site-logo" />
          <span className="logo-text">PRISM<span className="accent">.</span></span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#rentals">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => {
              const next = theme === 'dark' ? 'light' : 'dark'
              setTheme(next)
              document.documentElement.setAttribute('data-theme', next)
              localStorage.setItem('theme', next)
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
          </button>

          <a
            className="nav-cta"
            href="tel:+919021436667"
            onClick={() => { window.location.href = 'tel:+919021436667' }}
          >
            Call Now
          </a>
        </div>
        <QRModal open={qrOpen} onClose={() => setQrOpen(false)} value={qrValue} label={qrLabel} />
      </header>

      <main>
        <section id="home" className="hero">
          <div className="overlay" />
          <div className="hero-content">
            <span className="tagline">Visual Excellence</span>
            <h1>Events That <br/>Stand Out<span className="accent">.</span></h1>
            <p>Premium projector rentals featuring professional setups for cinema, corporate, and private events.</p>
            <div className="hero-btns">
              <a href="#rentals" className="btn btn-primary">View Packages</a>
              <a href="https://wa.me/919021436667" className="btn btn-secondary">Quick Chat</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2>Why PRISM?</h2>
          <div className="cards">
            <div className="card">
              <video
                className="card-video"
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                poster="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80"
                muted
                autoPlay
                loop
                playsInline
                aria-label="Sample cinema clip"
              />
              <i className="fas fa-film"/>
              <h3>Cinema Quality</h3>
              <p>Sharp, high-lumen projection.</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80" alt="technician setup" />
              <i className="fas fa-tools"/>
              <h3>Pro Setup</h3>
              <p>Delivery, calibration and support.</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80" alt="event setup" />
              <i className="fas fa-bolt"/>
              <h3>Seamless</h3>
              <p>Fast install and dismantle.</p>
            </div>
          </div>
        </section>

        <section id="rentals" className="section">
          <h2>Rental Tiers</h2>
          <div className="pricing">
            <div className="price-card">
              <h3>Small Screen (6x4)</h3>
              <div className="price">₹1,200<span>/day</span></div>
              <a
                className="btn btn-primary"
                href={`https://wa.me/${whatsappNumber}?text=${bookSmallMsg}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book 6x4
              </a>
            </div>

            <div className="price-card">
              <h3>Big Screen (8x6)</h3>
              <div className="price">₹1,500<span>/day</span></div>
              <a
                className="btn btn-primary"
                href={`https://wa.me/${whatsappNumber}?text=${bookBigMsg}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book 8x6
              </a>
            </div>

            <div className="price-card">
              <h3>PA System (2 speakers)</h3>
              <div className="price">₹3,000<span>/day</span></div>
              <a
                className="btn btn-primary"
                href={`https://wa.me/${whatsappNumber}?text=${bookPAonlyMsg}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book PA Only
              </a>
            </div>

            <div className="price-card featured">
               
              <h3>PA + Big Screen Package</h3>
              <div className="price">₹4,500<span>/day</span></div>
              <a
                className="btn btn-primary"
                href={`https://wa.me/${whatsappNumber}?text=${bookPAPkgMsg}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book PA + Screen
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="footer-inner">
          <div>
            <div className="logo">PRISM<span>.</span></div>
            <p>Bringing high-end visual projection to your doorstep.</p>
            <div className="social-links">
              <a href="https://instagram.com/Prism_events.202" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/919021436667" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
              <button className="qr-btn" onClick={() => { setQrValue('https://wa.me/919021436667'); setQrLabel('WhatsApp'); setQrOpen(true) }} aria-label="Show WhatsApp QR">QR</button>
              <button className="qr-btn" onClick={() => { setQrValue('tel:+919021436667'); setQrLabel('Call PRISM'); setQrOpen(true) }} aria-label="Show Call QR">Call QR</button>
              <button className="qr-btn" onClick={() => { setQrValue(window.location.origin); setQrLabel('Website'); setQrOpen(true) }} aria-label="Show Website QR">Site QR</button>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <p>+91 9021436667</p>
            <p><a href="mailto:info@prismevents.com">info@prismevents.com</a></p>
            <p><a href="mailto:prismrent@gmail.com">prismrent@gmail.com</a></p>
          </div>
        </div>
        <div className="copyright">&copy; 2026 PRISM EVENTS. All Rights Reserved.</div>
      </footer>
      {/* Floating call button for mobile */}
      <a className="floating-call" href="tel:+919021436667" onClick={() => { window.location.href = 'tel:+919021436667' }} aria-label="Call PRISM now">
        <i className="fas fa-phone" />
      </a>
    </div>
  )
}
