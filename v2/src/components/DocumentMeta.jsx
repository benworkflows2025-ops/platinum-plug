import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Per-route <title> and meta description. The static index.html still carries
// the default Home meta + Open Graph tags for crawlers that do not run JS;
// this updates the tab title and description as the visitor navigates.
const META = {
  '/': {
    title: 'Platinum Plug: Carry the Platinum',
    desc: 'A private, invitation-only membership to carry a real American Express Platinum authorized-user card and its perks. Only 5 spots.',
  },
  '/plans': {
    title: 'Choose Your Plan | Platinum Plug',
    desc: 'Pick your credit limit. Your refundable deposit equals your limit, and the monthly is your membership.',
  },
  '/cart': {
    title: 'Your Cart | Platinum Plug',
    desc: 'Review your membership and check out securely.',
  },
  '/success': {
    title: 'Welcome to Platinum Plug',
    desc: 'Your spot is reserved. We will reach out shortly to ship your American Express Platinum card.',
  },
  '/thank-you': {
    title: 'Welcome to Platinum Plug',
    desc: 'Your spot is reserved. We will reach out shortly to ship your American Express Platinum card.',
  },
  '/terms': {
    title: 'Membership Terms | Platinum Plug',
    desc: 'The plain-language terms of the Platinum Plug membership.',
  },
}

const FALLBACK = {
  title: 'Page Not Found | Platinum Plug',
  desc: 'The page you are looking for does not exist.',
}

export default function DocumentMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const m = META[pathname] || FALLBACK
    document.title = m.title
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', m.desc)
  }, [pathname])

  return null
}
