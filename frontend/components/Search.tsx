
"use client"
import React from 'react';

import { useRouter } from 'next/navigation'
import { getOpensaas } from "../lib/getSaas"



export default  function Search({searchText, results}) {


  const router = useRouter()

  function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    router.push(`/?saas=${form.saas.value}`)

  }



  return (
    <div className="mt-10 flex justify-center gap-x-2">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <input
        name="saas"
          type="search"

          className="bg-gray-50 border border-[#242422]  text-[#242422] text-sm rounded-none block w-96 p-2.5 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Calendly"
          required
        />
       <button
          type="submit"
          className="bg-black text-white rounded-none border-[#242422] inline-flex items-center p-2.5 ml-2 text-sm border font-medium"
        >
          <div className="inline-flex space-x-2 items-center">
            <span>Search</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>

        </button>
      </form>


      
    </div>
  );
}

