import { useState, useRef } from 'react'
import { PAYMENT_METHODS, PAY_CONTACT, copyText } from '../lib/payments.js'
import './PaymentOptions.css'

const walletIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="6" width="18" height="13" rx="2.5" />
    <path d="M3 9.5h18M16 13h2.5" strokeLinecap="round" />
    <path d="M16.5 6V4.6a1.5 1.5 0 00-2-1.41L4 6" strokeLinejoin="round" />
  </svg>
)

const copyIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V5a2 2 0 012-2h8" strokeLinecap="round" />
  </svg>
)

const checkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M5 12.5l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function PaymentOptions({ amount, tier }) {
  const [copied, setCopied] = useState(null)
  const timer = useRef(null)

  async function handlePay(method) {
    const ok = await copyText(method.handle)
    setCopied({ key: method.key, handle: method.handle, ok })
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(null), 2800)
  }

  return (
    <div className="pay">
      <div className="pay__head">
        <span className="pay__wallet" aria-hidden="true">
          {walletIcon}
        </span>
        <div>
          <p className="pay__title">Choose how to pay</p>
          <p className="pay__sub">
            Send {amount ? <strong>{amount}</strong> : 'your deposit and first month'} (deposit +
            first month){tier ? ` for the ${tier}` : ''}. Tap a method to copy the handle.
          </p>
        </div>
      </div>

      <div className="pay__methods">
        {PAYMENT_METHODS.map((m, i) => {
          const isCopied = copied?.key === m.key
          return (
            <div className="pay__row" key={m.key}>
              {i > 0 && (
                <div className="pay__or" aria-hidden="true">
                  <span>or</span>
                </div>
              )}
              <button
                type="button"
                className={`paybtn ${isCopied ? 'paybtn--copied' : ''}`}
                style={{ '--brand': m.color, '--on': m.onColor, '--glow': m.glow }}
                onClick={() => handlePay(m)}
                aria-label={`${m.label}. Copies ${m.handle} to your clipboard.`}
              >
                <span className="paybtn__icon">
                  <img src={m.icon} alt="" width="22" height="22" loading="lazy" />
                </span>
                <span className="paybtn__text">
                  <span className="paybtn__label">{isCopied ? 'Copied!' : m.label}</span>
                  <span className="paybtn__handle">{m.handle}</span>
                </span>
                <span className="paybtn__action" aria-hidden="true">
                  {isCopied ? checkIcon : copyIcon}
                </span>
              </button>
            </div>
          )
        })}
      </div>

      <div className="pay__toast" role="status" aria-live="polite">
        {copied &&
          (copied.ok
            ? `Copied! Send your payment to ${copied.handle}`
            : `Couldn't auto-copy — send your payment to ${copied.handle}`)}
      </div>

      <p className="pay__note">
        After sending payment, please text or DM us with your name and selected plan so we can
        process your membership. Contact: <a href={PAY_CONTACT.href}>{PAY_CONTACT.label}</a>
      </p>
    </div>
  )
}
