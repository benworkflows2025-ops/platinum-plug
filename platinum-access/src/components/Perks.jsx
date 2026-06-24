/* The Perks: describe American Express Platinum benefits generally.
   No specific dollar amounts are promised (benefits are set by the
   card issuer and change over time). */

const PERKS = [
  {
    title: 'Airport Lounge Access',
    body:
      'Step into the Centurion Lounge network and partner lounges. Quiet space, real food, and a calmer way to travel, the way Platinum members move.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M2 12l9-2 4-7 2 1-2 6 6 1v2l-6 1 1 6-2 1-3-6-9 2z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Travel & Hotel Benefits',
    body:
      'Tap into the Platinum world of travel: premium hotel programs, travel perks, and the kind of treatment that comes with the card.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Concierge On Call',
    body:
      'The Platinum concierge can help with reservations, bookings, and requests: a service desk for your life, available when you need it.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M4 18a8 8 0 0116 0M12 6V4M12 6a6 6 0 00-6 6h12a6 6 0 00-6-6zM3 18h18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Dining & Experiences',
    body:
      'Access curated dining programs and member experiences: the reservations and rooms that are hard to get on your own.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M6 3v8a2 2 0 002 2h0v8M6 3v6M8 3v6M18 3c-1.5 0-2 2-2 5s.5 4 2 4v9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'A Real Metal Card',
    body:
      'Not a digital novelty, but a physical Platinum card issued in your name as an authorized user, with the weight and finish you can feel.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
        <path d="M2.5 9.5h19M6 14.5h5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'The Status',
    body:
      'When you set the card down, people notice. The Platinum is shorthand for having arrived, and now it carries your name.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 2l2.6 6.3L21 9l-5 4.3L17.5 20 12 16.5 6.5 20 8 13.3 3 9l6.4-.7z" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Perks() {
  return (
    <section id="perks" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The Membership</span>
          <h2 className="section-title">Everything the Platinum opens</h2>
          <p className="section-sub">
            The perks that make the Platinum the Platinum, now within reach as an authorized
            member.
          </p>
        </div>

        <div className="perks-grid">
          {PERKS.map((perk) => (
            <article className="perk" key={perk.title}>
              <div className="perk__icon" aria-hidden="true">
                {perk.icon}
              </div>
              <h3 className="perk__title">{perk.title}</h3>
              <p className="perk__body">{perk.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
