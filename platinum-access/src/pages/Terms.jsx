import { Link } from 'react-router-dom'

/* PLAIN-LANGUAGE DRAFT ONLY.
   This is a first draft to protect the owner and inform members.
   It is NOT legal advice and must be reviewed by a licensed attorney
   (and checked against the card issuer's terms) before going live. */

export default function Terms() {
  return (
    <div className="page">
      <div className="container page__narrow legal">
        <h1 className="legal__title">Membership Terms</h1>
        <p className="legal__updated">Last updated: June 5, 2026</p>

        <div className="legal__notice">
          <strong>Draft for review.</strong> This is a plain-language first draft. Before
          publishing, have a licensed attorney review it and confirm it is consistent with the
          card issuer's cardmember agreement and with applicable consumer-protection and
          money-handling laws in the states where members live.
        </div>

        <h2>1. What this membership is</h2>
        <p>
          Platinum Plug ("we", "us") offers a private membership under which we add you ("you",
          "the member") as an <strong>authorized user</strong> on an American Express Platinum card
          that we own and control. A physical card may be issued in your name as an authorized
          user. This is a private arrangement and a service, and it is <strong>not</strong> a loan, a
          line of credit issued to you, a bank account, a credit-repair service, or a guarantee of
          any change to your credit.
        </p>

        <h2>2. The refundable deposit</h2>
        <p>
          To join, you pay a refundable security deposit equal to the credit limit you choose
          (for example, a $1,000 deposit corresponds to a $1,000 limit on the card). The deposit
          is held as security against charges you make on the card.
        </p>
        <ul>
          <li>The deposit is yours and is refundable, subject to the conditions in Section 4.</li>
          <li>The deposit is not a fee, a prepayment of membership, or interest-bearing.</li>
          <li>
            We may hold the deposit until the card balance attributable to you is fully settled.
          </li>
        </ul>

        <h2>3. The monthly membership fee</h2>
        <p>
          You also pay a recurring monthly membership fee. This fee is what you pay for the
          service: maintaining your authorized-user status, the physical card, and support. The
          monthly fee is <strong>separate from the deposit and is non-refundable</strong>. It
          renews automatically each month until you cancel.
        </p>

        <h2>4. Refunds and unpaid charges</h2>
        <p>When you cancel, we close out your authorized-user access and reconcile the account:</p>
        <ul>
          <li>
            If the charges you made are paid in full, your full deposit is returned to you within a
            reasonable period after the final statement clears.
          </li>
          <li>
            If charges you made are unpaid at cancellation, we apply your deposit to those unpaid
            charges and refund only the remainder. If unpaid charges exceed your deposit, you remain
            responsible for the difference.
          </li>
          <li>The monthly membership fee already paid is not refunded.</li>
        </ul>

        <h2>5. Your responsibilities as an authorized user</h2>
        <ul>
          <li>You will use the card lawfully and only for your own purchases.</li>
          <li>
            You will keep your spending within your chosen limit and pay for what you charge.
          </li>
          <li>
            You will provide accurate identifying information needed to add you as an authorized
            user, and keep your contact details current.
          </li>
          <li>
            You will not use the card for anything illegal, fraudulent, or prohibited by the card
            issuer.
          </li>
        </ul>

        <h2>6. Card benefits are set by the issuer</h2>
        <p>
          All card features and perks, including lounge access, travel benefits, and concierge,
          are provided and defined by American Express, not by us. They can be changed, limited, or
          withdrawn by the issuer at any time, and some benefits may be limited for authorized
          users. We do not control them and cannot guarantee any specific benefit.
        </p>

        <h2>7. Cancellation and ending the membership</h2>
        <p>
          You may cancel at any time; your membership stops renewing and we begin the reconciliation
          and refund process in Section 4. We may also end the membership in certain cases, for example if charges
          go unpaid, if required information is not provided, if the card is misused, or if the card
          issuer requires it. If we end the membership, the same reconciliation and refund rules
          apply.
        </p>

        <h2>8. No affiliation with American Express</h2>
        <p>
          Platinum Plug is independent and is not affiliated with, endorsed by, or sponsored by
          American Express. All trademarks belong to their respective owners and are used only to
          describe the card involved.
        </p>

        <h2>9. Risk and limits of our responsibility</h2>
        <p>
          Because the underlying card is issued by a third party whose rules can change, the service
          may be affected by actions outside our control. To the fullest extent permitted by law,
          our total responsibility to you is limited to the amount of your refundable deposit. We
          are not responsible for indirect or consequential losses.
        </p>

        <h2>10. Privacy</h2>
        <p>
          We collect only the information needed to provide the service (such as identification
          required to add you as an authorized user and to ship your card) and we do not sell it.
          Card payments are processed by Stripe; we never see or store your full card details.
        </p>

        <h2>11. Changes to these terms</h2>
        <p>
          We may update these terms. If we make a material change, we will let active members know.
          Continuing your membership after a change means you accept the updated terms.
        </p>

        <h2>12. Contact</h2>
        <p>Questions about these terms or your membership? Reach out to us and we'll help:</p>
        <ul>
          <li>
            Call or text: <a href="tel:+17573640983">(757) 364-0983</a>
          </li>
          <li>Mailing address: 62 Walnut Ave, Hampton, VA 23665</li>
        </ul>

        <Link to="/" className="legal__back">
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
