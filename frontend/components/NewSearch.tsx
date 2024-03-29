"use client"

import { useRouter } from 'next/navigation'

export default function NewSearch({ searchText = " " }){



    const router = useRouter()

    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>){
      event.preventDefault();
      const form = event.currentTarget

      const formElements = form.elements as typeof form.elements & {
        closedSaas: {value: string}
      }
      //replace any whitespaces at start of the search string
      const saasValue = form.saas.value.trim();
   
      router.push(`/saas/${saasValue}`)
  
    }

    return (
        <main className="flex items-center">
          <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
            <div className="relative  sm:rounded-lg">
            
                
                  <form className="flex items-center" onSubmit={handleSubmit}>
                  <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <label htmlFor="closedSaas" className="sr-only">Search</label>
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                      </div>

                   
                   <input
        name="saas"
          type="text"
id="closedSaas"
          className="bg-[#EEEEEE] border border-[#242422]  text-[#242422] text-sm rounded-none block  w-fit lg:w-96 p-2.5 pl-10
          "
          placeholder="Calendly"
          required
        //   defaultValue={searchText}

        />
                    </div>
                    </div>

                    <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                  <button type="submit" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white  bg-black   focus:outline-none ">
                  
                   Search
                  </button>
                
                </div> 
                    
                    </div>
                    
                  </form>

        
            </div>
          </div>
        </main>
    );
}