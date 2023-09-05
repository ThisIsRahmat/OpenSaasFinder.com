
import Link from 'next/link'
import { Twitter, Mail, Search } from 'lucide-react';


export default function Footer() {
  return (
    <footer >
    <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
    <div className="flex-col">
            <Link href="/" className="-m-1.5 p-1.5">
            <button
          type="submit"
          className=" hover:underline-offset-2 hover:underline text-[#242422] rounded-none inline-flex items-center p-2.5 ml-2 text-m font-medium"
        >
          <div className="inline-flex  items-center space-x-2">
            
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> */}
            <Search color="#242422" size={20} className="border-[#242422]" />
            <span className="block font-black lowercase text-[20px]">Open Saas Finder</span>
            {/* <Search size={16} color="#fcf38c" strokeWidth={1} absoluteStrokeWidth /> */}
          </div>

        </button>
          </Link>
            </div>
   
      <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
     <ul className="flex-inline">
        <li><Twitter/></li>
        <li><Mail/></li>
     </ul>
      </nav>
      <div className="mt-10 flex justify-center space-x-10">
     
      </div>
      <p className="mt-10 text-center text-xs leading-5 text-gray-500">
        &copy; 2023 Open Saas Finder. All rights reserved.
      </p>
    </div>
  </footer>
  )
}
