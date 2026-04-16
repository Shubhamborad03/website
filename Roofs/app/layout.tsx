import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Sam's Roof Coatings — Ad Preview",
  description: 'Ad creative preview for Sam\'s Roof Coatings restoration jobs',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
