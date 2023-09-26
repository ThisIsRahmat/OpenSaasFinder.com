import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   
        
    <main className="flex min-h-screen flex-col items-center space-y-5  p-24">
   
   <Hero/>
   <Search/>
    </main>

  )
}
