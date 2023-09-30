'use client'

import React from 'react';
import { GetServerSideProps } from 'next'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { searchOpensaas } from "../lib/searchsaas"


export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');


const handleSubmit = async (e) => {
  //prevent default action, like page loading etc
  e.preventDefault();

  console.log(searchQuery)

  setSearchQuery(e.target.value)

  let results = searchOpensaas(searchQuery)

// // const results = searchSaas(searchQuery)
// router.push('/[saas]')


console.log(results)


  //   // Make a POST request to the API route with the form data
  //   fetch('/api/[name]', {
  //     method: 'GET',
  //     // headers: {
  //     //   'Content-Type': 'application/json',
  //     // },
  //     body: JSON.stringify(searchQuery),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Redirect to the OpenSaas data
  //       router.push("/[saas]");
  //     })
  //     .catch((error) => {

  //       console.error(error);
  //     });
  // };
    
}




  return (
    <div className="mt-10 flex justify-center gap-x-2">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <input
          type="search"
          id="saas"
              value={searchQuery}
          onChange={event => {
            setSearchQuery(event.target.value);
          }}
          className="bg-gray-50 border border-[#242422]  text-[#242422] text-sm rounded-none block w-72 p-2.5 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Open Source version of Slack"
          required
        />
       <button
          type="submit"
          className="bg-[#fcf38c] text-[#242422] rounded-none border-[#242422] inline-flex items-center p-2.5 ml-2 text-sm border font-medium"
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

