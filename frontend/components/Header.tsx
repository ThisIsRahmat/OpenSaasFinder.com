'use client'

import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { SVGProps } from 'react';


function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}



export default function NewNewHeader() {
  return (
    <header>
      <nav>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
          <Link href="/" className="flex items-center">
  {/* Create a logo for OpenSaas Finder and add it here */}
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">OpenSaas Finder</span>
            </Link>
            <div className="hidden lg:flex lg:gap-10">
    
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-xl bg-gray-50 px-6 pb-6 pt-20 shadow-2xl shadow-gray-900/20"
                        >
                     
                          <div className="mt-4 flex flex-col gap-4">
                          <button className="" >
                          <Link href="https://airtable.com/appwLc0M2vNJcHRCu/shr837GjMn23aKRRs">
                           Submit an opensource project</Link> </button> 
                     
                          
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>

             <Link href="https://airtable.com/appwLc0M2vNJcHRCu/shr837GjMn23aKRRs">
                <button className="hidden lg:block sm:bg-black sm:text-white sm:font-medium sm:text-l  sm:px-2 lg:px-5 sm:py-2 lg:py-2.5 sm:mr-2 focus:outline-none">
                Submit an opensource project
             </button>
             </Link>
          
         
      
          </div>
   </div>
      </nav>
    </header>
  )
}
