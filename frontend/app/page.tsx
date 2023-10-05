import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import Search from '../components/Search'
import DisplayTypes from '../components/DisplayTypes'
import { getOpensaas } from "../lib/getSaas"

const inter = Inter({ subsets: ['latin'] })



export default async function Home({ searchParams }) {

  const searchText = searchParams.saas;



  return (
   
        
    <main className="flex min-h-screen flex-col items-center space-y-5  p-24">
   
   <Hero/>
   <DisplayTypes/>
   <Search searchText={searchText}  />
    </main>

  )
}
