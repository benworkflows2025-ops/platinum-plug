/* Currency display helpers. All amounts live as integer cents;
   these turn them into human strings like "$1,000" or "$350.00". */

// Whole-dollar display (our amounts are always whole dollars).
export function formatCents(cents) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents / 100)
}
