import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
// import Search from '../components/Search'
import NewSearch from '../components/NewSearch'
import DisplayTypes from '../components/DisplayTypes'
// import { getOpensaas } from "../lib/getSaas"

const inter = Inter({ subsets: ['latin'] })



export default async function Home({ searchParams} : { searchParams : any }) {

  const searchText = searchParams.saas;



  return (
   
        
    <main className="flex sm:h-screen flex-col items-center space-y-10  p-24">
   
   <Hero/>
   {/* <DisplayTypes/> */}

  <NewSearch searchText={searchText}/>
    </main>

  )
}
