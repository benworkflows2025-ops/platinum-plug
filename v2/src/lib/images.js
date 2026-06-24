/* ============================================================
   Section imagery.

   Curated, validated Unsplash photos served straight from the
   Unsplash CDN. Works out of the box with no API key. The structure
   is API-ready: if you set VITE_UNSPLASH_ACCESS_KEY you can extend
   this to fetch dynamically, but these fallbacks keep the page fast
   and stable, and every id below has been verified to resolve.

   To self-host later, download these and drop them in src/assets.
   ============================================================ */

const CDN = 'https://images.unsplash.com/'

function unsplash(id, w, q = 70) {
  return `${CDN}${id}?auto=format&fit=crop&w=${w}&q=${q}`
}

export const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY || ''

// Each slot: a primary url (sized for its use) + alternates if you want to swap.
export const IMAGES = {
  heroScene: unsplash('photo-1663811397207-418a92396ad5', 1100), // dark luxury interior
  lounge: unsplash('photo-1504150558240-0b4fd8946624', 1000), // airport lounge
  hotel: unsplash('photo-1723516908282-b3c795e9416a', 520), // hotel lobby
  dining: unsplash('photo-1643101570532-88c8ecc07c1f', 520), // fine dining
}

export const IMAGE_ALTERNATES = {
  heroScene: ['photo-1584670380670-28f0d4cabb06', 'photo-1778940454347-cd4d93a812df'],
  lounge: ['photo-1530521954074-e64f6810b32d', 'photo-1549897411-b06572cdf806'],
  hotel: ['photo-1772665762866-8dcfff65b3f3', 'photo-1760385737098-0b555a75b2ba'],
  dining: ['photo-1578474846511-04ba529f0b88', 'photo-1469234496837-d0101f54be3e'],
}
