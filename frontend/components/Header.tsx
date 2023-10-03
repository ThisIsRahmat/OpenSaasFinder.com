
import Link from 'next/link'
import { Search } from 'lucide-react';


export default function Header() {
  return (
    <header className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 ">
            <div className="flex-col">
            <Link href="/" className="-m-1.5 p-1.5">
            <button
          type="submit"
          className="  text-[#242422] rounded-none inline-flex items-center p-2.5 ml-2 text-m font-medium"
        >
          <div className="inline-flex  items-center ">
            
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> */}
            <Search color="#242422" size={20} className="border-[#242422]" />
            <span className="block font-black capitalize text-[20px]">Open Saas Finder</span>
            {/* <Search size={16} color="#fcf38c" strokeWidth={1} absoluteStrokeWidth /> */}
          </div>

        </button>
          </Link>
            </div>
   
        </div>
        <div className="flex lg:hidden">
   
        </div>
  
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link href="/submit">
        <button
          href="#"
          className="lowercase bg-black text-white rounded-none border-[#242422] px-4 py-2 border text-sm font-semibold inline-flex items-center"
        >
          Submit an opensource saas
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-4 h-4 ml-1.5"
          >
            <path d="M13 5H19V11" />
            <path d="M19 5L5 19" />
          </svg>
        </button>
      </Link>
        </div>
      </nav>

    </header>
  )
}
