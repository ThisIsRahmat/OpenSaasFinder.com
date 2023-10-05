import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import Search from '../components/Search'
import NewSearch from '../components/NewSearch'
import DisplayTypes from '../components/DisplayTypes'
import { getOpensaas } from "../lib/getSaas"
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ searchText }) {

  return (
    <main className="flex sm:h-screen flex-col items-center space-y-10  p-24">
      <Hero/>
      <NewSearch searchText={searchText}/>
    </main>
  )
}

export async function GetServerSideProps({searchParams}) {
  const searchText = searchParams.saas;
  return {
    props: {
      searchText: searchParams.saas
    }
  }
}
