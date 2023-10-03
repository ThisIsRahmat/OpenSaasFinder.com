"use client"

import Link from 'next/link'
import { Twitter, Mail, Search } from 'lucide-react';


import { MoveUpRight  } from 'lucide-react';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear(); 

  return (
    <footer className="pb-4 absolute bottom-0 inset-x-0  ">
      <nav className=" border-t border-slate-600 pb-4 pt-2 ">


      <Link href="https://twitter.com/opensaasfinder" title="Email">
        <div className="flex items-center">
           <Twitter/>
        </div>
      </Link>
         
          <div className="absolute right-0 flex px-6 space-x-2 ">
         
            <p className="text-sm sm:text-[16px] text-left">
            Built by <span className="underline-offset-2 underline"> <Link  href="https://www.thisisrahmat.com/">  Rahmat Junaid </Link> </span> in 🇬🇧
            </p>
          </div>

      </nav>
    </footer>
  );
}



// "use client"

// import Link from 'next/link';
// import { IconBrandGithub, IconMail, IconFileDescription } from '@tabler/icons-react';

// import { MoveUpRight  } from 'lucide-react';

// export default function Footer() {
//   const date = new Date();
//   const year = date.getFullYear(); 

//   return (
//     <footer className=" bg-[#247c5c] text-white">
//     <nav className=" py-2 text-center lg:flex lg:justify-between max-w-7xl mx-auto">
//   {/* Social Media Links */}
    
//   {/* Social Media Links */}
//   <ul className="flex justify-center sm:text-[16px] text-sm sm:space-x-6 space-x-2 mb-4 lg:mb-0">
//     <li className="flex items-center  hover:text-black">
//       <Link href="mailto:thisisrahmat@gmail.com" title="Email">
//         <div className="flex items-center">
//            <IconMail/>
//         </div>
//       </Link>
//     </li>
//     <li className="flex items-center  hover:text-black ">
//       <Link href="https://github.com/ThisIsRahmat" title="GitHub">
//         <div className="flex items-center">
//         <IconBrandGithub/>
//         </div>
//       </Link>
//     </li>
//     <li className="flex items-center hover:text-black">
//       <Link href="https://read.cv/rahmat" title="Resume">
//         <div className="flex items-center">
//          <IconFileDescription />
          
//         </div>
//       </Link>
//     </li>
//   </ul>

//   {/* Copyright Text */}
//   <p className="text-sm sm:text-[16px] ">
//     &copy; Rahmat Junaid {year} All rights reserved.
//   </p>
// </nav>


//     </footer>
//   );
// }
