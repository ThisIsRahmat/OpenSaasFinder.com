
"use client"
import React from 'react';

import { useRouter } from 'next/navigation'
import { getOpensaas } from "../lib/getSaas"
import { IconSearch } from '@tabler/icons-react';



export default  function Search({ searchText = " " }) {


  const router = useRouter()

  function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    //replace any whitespaces at start of the search string
    const saasValue = form.saas.value.trimStart();

    router.push(`/saas/${saasValue}`)

  }



  return (
    <div className="mt-10 flex justify-center gap-x-2">
      <form className="flex items-center " onSubmit={handleSubmit}>
      <div className="relative  rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <IconSearch/>
        </div>
        <input
        name="saas"
          type="text"

          className="bg-[#EEEEEE] border border-[#242422]  text-[#242422] text-sm rounded-none block w-96 p-2.5 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Calendly"
          required
          defaultValue={searchText}

        />
         </div>

       
       <button
          type="submit"
          className="bg-[#333333] text-white rounded-none border-[#242422] inline-flex items-center p-2.5 ml-2 text-sm border font-medium"
        >
          <div className="inline-flex space-x-2 items-center">
           Search
          
          </div>

        </button>
      </form>


      
    </div>
  );
}

