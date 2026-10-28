import { Link } from 'react-router-dom'
import SpotsBadge, { SOLD_OUT } from './SpotsBadge.jsx'
import platinumCard from '../assets/platinum-card.avif'
import { IMAGES } from '../lib/images.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <SpotsBadge />

          <h1 className="hero__title">
            Carry the <span className="metal-text">Platinum.</span>
            <br />
            Live the Status.
          </h1>

          <p className="hero__sub">
            Get a real American Express Platinum card in your name as an authorized user: the
            metal, the lounges, the look, all without the income requirements or the wait. A
            private membership for those who move differently.
          </p>

          <div className="hero__actions">
            {SOLD_OUT ? (
              <button type="button" className="btn btn--primary" disabled>
                Sold Out
              </button>
            ) : (
              <Link to="/plans" className="btn btn--primary">
                Claim Your Spot
              </Link>
            )}
            <Link to="/#how" className="btn btn--ghost">
              How it works
            </Link>
          </div>

          <p className="hero__trust">Refundable deposit · Cancel anytime · Discreet &amp; private</p>
        </div>

        {/* Card layered over an ambient scene. Decorative; the headline carries the meaning.
            Drop a real lounge/hotel photo onto .hero__scene to go photographic.
            The card now carries a "mirror" treatment: a specular glint sweeps across
            it, a cursor-tracked hotspot reacts to the pointer, and every sheen layer is
            masked to the exact card silhouette via the asset url in --card-mask. */}
        <div
          className="hero__visual"
          aria-hidden="true"
          onPointerMove={(e) => {
            const el = e.currentTarget
            const r = el.getBoundingClientRect()
            const px = (e.clientX - r.left) / r.width // 0..1
            const py = (e.clientY - r.top) / r.height // 0..1
            el.style.setProperty('--mx', `${(px * 100).toFixed(2)}%`)
            el.style.setProperty('--my', `${(py * 100).toFixed(2)}%`)
            // gentle lean toward the cursor (capped ~9deg)
            el.style.setProperty('--ry', `${((px - 0.5) * 18).toFixed(2)}deg`)
            el.style.setProperty('--rx', `${((0.5 - py) * 14).toFixed(2)}deg`)
            el.style.setProperty('--active', '1')
          }}
          onPointerLeave={(e) => {
            const el = e.currentTarget
            el.style.setProperty('--mx', '50%')
            el.style.setProperty('--my', '34%')
            el.style.setProperty('--ry', '0deg')
            el.style.setProperty('--rx', '0deg')
            el.style.setProperty('--active', '0')
          }}
        >
          <div className="hero__beam" />
          <div className="hero__scene">
            <img className="hero__photo" src={IMAGES.heroScene} alt="" loading="eager" />
          </div>
          <div className="hero__ellipse hero__ellipse--1" />
          <div className="hero__ellipse hero__ellipse--2" />
          <div className="hero__card-reflection" />

          {/* Card + masked mirror overlays move together. The card asset is passed as
              the mask url so every sheen layer is clipped to the exact silhouette +
              rounded corners (never a rectangle over the transparent alpha). */}
          <div className="hero__card-stage" style={{ '--card-mask': `url(${platinumCard})` }}>
            <img
              src={platinumCard}
              alt=""
              className="hero__card-img"
              width="315"
              height="200"
              loading="eager"
            />
            {/* high-contrast reflected-environment map (overlay) — the mirror finish */}
            <div className="hero__card-chrome" />
            {/* hard specular glint sweep (screen) — crisp polished-chrome highlight */}
            <div className="hero__card-glare" />
            {/* cursor-tracked mirror hotspot (screen) — brightens on hover */}
            <div className="hero__card-hotspot" />
            {/* soft-light top edge rim so the metal bezel catches the light */}
            <div className="hero__card-edge" />
          </div>
        </div>
      </div>
    </section>
  )
}
