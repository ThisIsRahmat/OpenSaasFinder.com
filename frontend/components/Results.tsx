

'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Star} from 'lucide-react';
import { saasType } from '../types/saasType'

// interface saasType {
//   name: string;
//   description: string;
//   website: string;
//   github: string;
//   logo: string ;
//   }


  
  export default function Results({ searchText, results }: { searchText: string; results: saasType[] }) {
    return (
      <div className="bg-white py-24 sm:py-32">


{results.length > 0? 

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                
            Open Source Saas alternatives to <span  className="capitalize font-bold italic underline underline-offset-2"> {searchText} </span>
                
                </h2>
      
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {results.map((saas) => (
              <div key={saas.website} className="relative isolate border rounded-xl px-2 py-2 flex flex-row gap-2 lg:flex-col">
                <div className="relative  py-2 px-2">
                  <Link href={saas.website}>
                  <Image
                  src={saas.logo}
                  width={350}
                  height={350}
                  alt={saas.name}
                  className="w-1/2 "
                  />
                  </Link>
                  <div className="" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-6 flex items-center gap-x-2 text-xs">
                 
                    <Link
                      href={saas.github}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      
                      <div className="flex-inline">
                      star on github
                    
                      </div>
                    </Link>
                  </div>
                  <div className="group relative px-2 pb-2">
                    <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 group-hover:underline group-hover:underline-offset-4 group-hover:text-gray-600">
                      <Link href={saas.website}>
                        <span className="absolute inset-0" />
                        {saas.name}
                      </Link>
                    </h3>
                    <p className="mt-3  text-m leading-6 normal-case">{saas.description}</p>
                  </div>
       
                </div>


                {/* inserting the different types here  */}
                {/* <div className=" flex items-center text-xs">
                 
                 <a
                   href={saas.github}
                   className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                 >
                  productivity
                 </a>
               </div> */}
              </div>
            ))}
          </div>
        </div>


: 

<div className="text-center  pt-20">
      <h2 className="text-3xl  text-gray-900 sm:text-4xl">
    Sorry we could not find an Open Source Saas replacement for <span  className="capitalize font-bold italic"> {searchText} </span>
   
   <br/>
   Click <Link href="https://airtable.com/appwLc0M2vNJcHRCu/shr837GjMn23aKRRs" className="underline"> here</Link> to submit a new Open Saas to the directory
    </h2>

    
    
    </div>





    }

      </div>
    )
  }
  