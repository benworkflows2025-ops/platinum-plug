import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Perks from '../components/Perks.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Scarcity from '../components/Scarcity.jsx'
import FAQ from '../components/FAQ.jsx'

// Landing page: the pitch. Plans and Cart live on their own routes
// (/plans and /cart) so this is no longer one long single page.
export default function Home() {
  const { hash } = useLocation()

  // Smooth-scroll to an in-page section when the URL has a hash,
  // e.g. arriving at "/#perks" from the nav on another page.
  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const t = setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
    return () => clearTimeout(t)
  }, [hash])

  return (
    <>
      <Hero />
      <hr className="hairline" />
      <Perks />
      <HowItWorks />
      <Scarcity />
      <FAQ />
    </>
  )
}
