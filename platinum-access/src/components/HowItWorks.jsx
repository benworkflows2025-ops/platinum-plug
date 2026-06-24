const STEPS = [
  {
    n: '01',
    title: 'Choose your limit & send a refundable deposit',
    body:
      'Pick the credit limit you want. Your refundable security deposit equals that limit: a $1,000 deposit sets a $1,000 limit on your card.',
  },
  {
    n: '02',
    title: 'We add you & ship your Platinum',
    body:
      'We add you as an authorized user and a physical American Express Platinum card is issued in your name and shipped to you.',
  },
  {
    n: '03',
    title: 'Enjoy the card, cancel anytime',
    body:
      'Use the card and the perks for your monthly membership. Cancel whenever you like; once the balance is paid in full, your deposit is returned.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section section--tight">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title">Three steps to Platinum</h2>
        </div>

        <div className="steps">
          {STEPS.map((step) => (
            <div className="step" key={step.n}>
              <span className="step__num">{step.n}</span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
