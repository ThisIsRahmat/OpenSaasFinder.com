"use client"

import Link from 'next/link'
import { Twitter, Mail, Search } from 'lucide-react';


// export default function Footer() {
//   return (
//     <footer className="px-4 pb-4 lg:px-8   sm:px-6 absolute bottom-0 right-0">
//             <nav className=" border-t border-slate-600">
// <div>
// <p>
//   Built by <Link className=" hover:text-green-700 hover:underline no-underline" href="www.thisisrahmat.com"> Rahmat Junaid </Link> in 🇬🇧
// </p>
// </div>
// </nav>
//   </footer>
//   )
// }


import { MoveUpRight  } from 'lucide-react';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear(); 

  return (
    <footer className="pb-4 absolute bottom-0 inset-x-0  ">
      <nav className=" border-t border-slate-600 pb-4 pt-2 ">

         
          <div className="absolute right-0 flex px-6 space-x-2 ">
         
            <p className="text-sm sm:flex sm:space-x-12 sm:space-y-2 sm:text-[16px] text-left">
            Built by  <Link className=" hover:text-green-700 hover:underline no-underline" href="www.thisisrahmat.com">  Rahmat Junaid   </Link> in 🇬🇧
            </p>
          </div>

      </nav>
    </footer>
  );
}
