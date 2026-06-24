/* ============================================================
   Cart state.

   Design decision (per the brief): a customer realistically buys
   ONE plan. So the cart holds at most a single plan. "Add to cart"
   on any tier selects that tier (replacing a previous selection),
   "remove" clears it, and "change" just sends them back to the
   plans grid to pick another. This keeps a customer from stacking
   multiple American Express Platinum limits, which we don't support.
   ============================================================ */

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { getPlanById } from '../data/plans'

const CartContext = createContext(null)

const STORAGE_KEY = 'platinum-plug:selectedPlanId'

function loadInitialPlanId() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) || null
  } catch {
    return null // localStorage may be unavailable (private mode, etc.)
  }
}

export function CartProvider({ children }) {
  // We persist only the plan id, then resolve it against PLANS so the
  // stored cart can never drift from the real pricing data.
  const [selectedPlanId, setSelectedPlanId] = useState(loadInitialPlanId)

  useEffect(() => {
    try {
      if (selectedPlanId) {
        window.localStorage.setItem(STORAGE_KEY, selectedPlanId)
      } else {
        window.localStorage.removeItem(STORAGE_KEY)
      }
    } catch {
      /* ignore storage failures */
    }
  }, [selectedPlanId])

  const selectPlan = useCallback((plan) => {
    setSelectedPlanId(plan.id)
  }, [])

  const clearCart = useCallback(() => {
    setSelectedPlanId(null)
  }, [])

  // Resolve id -> live plan object (null if nothing selected / stale id).
  const selectedPlan = getPlanById(selectedPlanId)

  const value = {
    selectedPlan,
    hasItem: Boolean(selectedPlan),
    selectPlan,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used inside <CartProvider>')
  }
  return ctx
}
