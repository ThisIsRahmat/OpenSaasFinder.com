export default function Form(){
  return (
  <main className="space-y-4">
 

    <div className="border-b border-gray-900/10 pb-12">
          <h2 className=" text-center font-semibold leading-7 text-2xl text-gray-900">Submit an Open Saas</h2>
          <p className="mt-1 text-m  text-gray-600">
          Submiting an Open Saas <span className="font-bold underline">does not</span> guarantee that it will be added to the directory. 

      Any Open Saas submission has to be an alternatives or potential replacement for an existing Saas company.
      <br/>
      I check every submission before it gets added to the site. 
          </p>
</div>
    <form>
      <div className="space-y-12">
    
</div>


<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Open Saas Name
              </label>
              <div className="mt-2">
                <div className="flex  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Supabase"
                  />
                </div>

                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Description
              </label>
              <div className="mt-2">
                <div className="flex  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="description"
                    id="description"
    
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Open source Firebase "
                  />
                </div>
              </div>




              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Website
              </label>
              <div className="mt-2">
                <div className="flex shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="website"
                    id="username"
   
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="https://supabase.com/"
                  />
                </div>
              </div>

              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
           Github
              </label>
              <div className="mt-2">
                <div className="flex  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="github"
                    id="github"
          
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="https://github.com/supabase/supabase"
                  />
                </div>
              </div>



              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
           Alternative Closed Saas
              </label>
              <div className="mt-2">
                <div className="flex  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                 
                  <input
                    type="text"
                    name="closed_saas"
                    id="closed_saas"
                    
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Firebase"
                  />
                </div>
              </div>
            </div>
            </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">

        <button
          type="submit"
          className=" bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:border hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit Open Source Saas
        </button>
      </div>


</form>

  </main>
  )
}