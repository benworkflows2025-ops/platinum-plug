import { IMAGES } from '../lib/images.js'

/* The Membership: an asymmetrical, editorial benefits layout (not a card grid).
   Benefits are described generally; no specific dollar amounts are promised.
   Imagery is decorative (aria-hidden); the headings carry the meaning. */

export default function Perks() {
  return (
    <section id="perks" className="section membership">
      <div className="membership__glow" aria-hidden="true" />
      <div className="container">
        <div className="section-head section-head--left">
          <span className="eyebrow">The Membership</span>
          <h2 className="section-title">Everything the Platinum opens</h2>
          <p className="section-sub">
            The perks that make the Platinum the Platinum, now within reach as an authorized
            member.
          </p>
        </div>

        <div className="membership__grid">
          {/* Feature panel: Airport Lounge (real photo, copy anchored at the bottom) */}
          <article className="feature">
            <img className="feature__photo" src={IMAGES.lounge} alt="" loading="lazy" />
            <div className="feature__body">
              <span className="feature__tag">PLT · Lounge Access</span>
              <h3 className="feature__title">Airport lounge access</h3>
              <p className="feature__text">
                Step into the Centurion Lounge network and partner lounges. Quiet space, real
                food, and a calmer way to travel, the way Platinum members move.
              </p>
            </div>
          </article>

          {/* Right stack: three different block shapes */}
          <div className="membership__stack">
            <article className="mblock mblock--travel">
              <div className="mblock__thumb" aria-hidden="true">
                <img src={IMAGES.hotel} alt="" loading="lazy" />
              </div>
              <div>
                <h3 className="mblock__title">Travel &amp; hotel benefits</h3>
                <p className="mblock__text">
                  Tap into the Platinum world of travel: premium hotel programs, travel perks, and
                  the kind of treatment that comes with the card.
                </p>
              </div>
            </article>

            <article className="mblock mblock--quote">
              <span className="mblock__accent" aria-hidden="true" />
              <span className="mblock__mark" aria-hidden="true">
                &rdquo;
              </span>
              <p className="mblock__quote">
                A service desk for your life, available the moment you need it.
              </p>
              <span className="mblock__label">Concierge on call</span>
            </article>

            <article className="mblock mblock--metal">
              <div>
                <h3 className="mblock__title">A real metal card</h3>
                <p className="mblock__text">
                  Not a digital novelty. A physical Platinum card issued in your name, with the
                  weight and finish you can feel.
                </p>
              </div>
              <div className="minicard" aria-hidden="true">
                <span className="minicard__chip" />
                <span className="minicard__line" />
                <span className="minicard__line minicard__line--2" />
                <span className="minicard__sheen" />
              </div>
            </article>
          </div>
        </div>

        {/* Bottom row: dining + status */}
        <div className="membership__row">
          <article className="mblock mblock--dining">
            <div className="mblock__inset" aria-hidden="true">
              <img src={IMAGES.dining} alt="" loading="lazy" />
            </div>
            <div>
              <h3 className="mblock__title">Dining &amp; experiences</h3>
              <p className="mblock__text">
                Access curated dining programs and member experiences: the reservations and rooms
                that are hard to get on your own.
              </p>
            </div>
          </article>

          <article className="mblock mblock--status">
            <span className="mblock__rule" aria-hidden="true" />
            <p className="mblock__prestige">When you set the card down, people notice.</p>
            <span className="mblock__label">The status</span>
          </article>
        </div>
      </div>
    </section>
  )
}
