import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alok Debnath - Web Developer | Crafting Seamless and User-Friendly Applications',
  description:
    "Explore the portfolio and expertise of Alok Debnath, a passionate web developer dedicated to creating seamless and user-friendly applications for the web. Discover innovative projects and a commitment to delivering exceptional digital experiences.",
  keywords: 'Alok Debnath, Web Developer, Portfolio, Digital Experiences, Web Applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
