import './globals.css'
import { DM_Sans } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NewHeader from '../components/NewHeader'
import NewFooter from '../components/NewFooter'



const dm_sans = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Open Saas Finder',
  description: 'Discover Open Source Alternative to Popular Saas Products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen w-fit  { ` ${dm_sans.className}`}">
      <main className="">
      <NewHeader/>
      {children}
      <NewFooter/>
      </main>

      
      </body>
    </html>
  )
}
