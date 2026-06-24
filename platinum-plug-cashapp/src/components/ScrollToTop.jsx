import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// On route change (e.g. / -> /terms), jump to the top of the page.
// In-page anchor links (#plans) are left to the browser.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return // let anchor scrolling happen naturally
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
