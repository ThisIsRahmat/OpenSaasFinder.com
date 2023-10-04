import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import Search from '../components/Search'
import { getOpensaas } from "../lib/getSaas"

const inter = Inter({ subsets: ['latin'] })



export default async function Home({ searchParams }) {

  const searchText = searchParams.saas;
  const results = getOpensaas(searchText)


  return (
   
        
    <main className="flex min-h-screen flex-col items-center space-y-5  p-24">
   
   <Hero/>
   <Search searchText={searchText} results={results}/>
    </main>

  )
}
