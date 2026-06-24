import { useState } from 'react'
import { Link } from 'react-router-dom'

/* Honest FAQ copy. We do NOT claim the arrangement is unconditionally
   "legal" or guarantee a credit-score effect, since both would be misleading.
   Answers are plain-language; the Terms page has the binding detail. */

const FAQS = [
  {
    q: 'Is the deposit really refundable?',
    a: (
      <>
        Yes. Your security deposit is refundable and is returned to you when you cancel and the
        card balance is paid in full. If charges are left unpaid, we keep only the part of the
        deposit needed to cover them and refund the rest. Full detail is in our{' '}
        <Link to="/terms">Terms</Link>.
      </>
    ),
  },
  {
    q: 'What is the monthly membership fee for?',
    a:
      'The monthly fee is your membership. It covers maintaining your authorized-user status on the card, the physical Platinum card in your name, and ongoing support. It is separate from your refundable deposit and is not refundable.',
  },
  {
    q: 'Can I cancel anytime?',
    a:
      'Yes. There is no lock-in. Cancel whenever you like and your membership stops renewing. Once any balance on the card is settled in full, your deposit is returned to you.',
  },
  {
    q: 'How does this work, and is it legal?',
    a: (
      <>
        It's a private authorized-user arrangement: we add you as an authorized user on an
        American Express Platinum card that we hold, and a card is issued in your name. It is not a
        loan, and it is not a credit-repair or credit-building product. Authorized-user
        arrangements between people are common and ordinary, but card issuers set their own rules
        about them and those rules can change, so please read our <Link to="/terms">Terms</Link>{' '}
        in full before joining so you know exactly what you're getting.
      </>
    ),
  },
  {
    q: 'Will this raise my credit score?',
    a:
      'We do not sell this as a credit product and we make no promise about your credit score. You are buying the card, the perks, and the experience, not a guaranteed change to your credit.',
  },
  {
    q: 'What do you need from me after I pay?',
    a:
      'After checkout we reach out personally to collect the details needed to add you as an authorized user and ship your card. Your payment today simply reserves your spot and starts your membership.',
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
      <button
        type="button"
        className="faq__q"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>
        <span className="faq__icon" aria-hidden="true" />
      </button>
      <div className="faq__a" role="region">
        <p>{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section section--glow">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Questions</span>
          <h2 className="section-title">Good to know</h2>
        </div>

        <div className="faq">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
