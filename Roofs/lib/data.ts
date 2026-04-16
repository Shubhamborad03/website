export interface ImageSet {
  id: number
  suburb: string
  days: string
  before: string
  after: string
  roofType: string
  hook: string
  result: string
}

export const IMAGE_SETS: ImageSet[] = [
  {
    id: 1, suburb: 'Noosaville', days: '1 day',
    before: '/images/before-1.png', after: '/images/after-1.png',
    roofType: 'Tile Roof',
    hook: 'Moss. Algae. Silent water damage.',
    result: 'Bright white Dulux coating. 100% restored.',
  },
  {
    id: 2, suburb: 'Tewantin', days: 'same day',
    before: '/images/before-2.png', after: '/images/after-2.png',
    roofType: 'Metal Roof',
    hook: 'Streaks. Fade. Years of UV damage.',
    result: 'Charcoal Dulux coating. Like a new roof.',
  },
  {
    id: 3, suburb: 'Sunshine Coast', days: '1 day',
    before: '/images/before-3.png', after: '/images/after-3.png',
    roofType: 'Corrugated Iron',
    hook: 'Rust patches. Failing seams.',
    result: 'Cream coating. Every seam sealed.',
  },
  {
    id: 4, suburb: 'Gold Coast', days: 'same day',
    before: '/images/before-4.png', after: '/images/after-4.png',
    roofType: 'Corrugated Metal',
    hook: 'Oxidised. Faded. UV damage throughout.',
    result: 'Dark charcoal. Waterproofed for 10 years.',
  },
]

export const BRAND = {
  name: "Sam's Roof Coatings",
  phone: '0412 345 678',
  qbcc: 'QBCC 15207890',
  standard: '$7,400',
  area: '$5,920',
  reroof: '$28,000',
  saves: '$18,000+',
  reviews: '127',
  customer: 'Karen M.',
  customerSuburb: 'Noosaville',
  quote: "Couldn't believe the difference. Sam fixed things I didn't even know needed doing.",
  handle: '@samsroofcoatings',
}
