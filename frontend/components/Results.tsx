import Link from 'next/link'
import Image from 'next/image'
import { Github } from 'lucide-react';


export default function Results({ searchText, results }: { searchText: string; results: saasType[] }) {
    
    return (
        <main className="gap-y-28">


   {results.length > 0? 




<div className="gap-y-10" >
 
 <div className="mt-10 text-center"> 
 <h2 className="text-3xl">
   Open Source Saas alternatives to <span  className="capitalize font-bold"> {searchText} </span>
 </h2>
 </div>

 <div className="space-y-8 px-40 mx-20 h-full  mt-10 flex flex-col sm:flex-row space-x-4">
    {results.map((saas) => (
          <div className="item-centre justify-center w-1/3  " key={saas.id}>
            <div className=" rounded-md   border">
              
              <div className=" dark:bg-gray-700">
                <Image
                  width={100}
                  height={250}
                  src={`${saas.logo}`}
                  alt={saas.name}
                />
              </div>

              <div>
            <p className="pl-4 font-bold hover:underline hover:text-blue-700 text-xl mb-2 text-ellipsis overflow-hidden">
                  <Link href={saas.website}>{saas.name}</Link>
                </p>
                </div>
              <div className="px-6 py-4">
               
                <p className="text-l mb-2 text-ellipsis overflow-hidden">
                 {saas.description}
                </p>
                {/* <Github className="font-bold hover:underline hover:text-blue-700 text-xl mb-2 text-ellipsis overflow-hidden">
                  <Link href={saas.website}>{saas.name}</Link>
                </Github> */}
              </div>
            </div>
          </div>
        ))}
 
</div>
</div>

: 

<div className="text-center  pt-20">
<h1 className="text-4xl">
    Sorry we could not find an Open Source Saas replacement for <span  className="capitalize font-bold italic"> {searchText} </span>
   
   <br/>
   Click <Link href="/submit" className="underline"> here</Link> to submit a new Open Saas to the directory
    </h1>

    
    
    </div>
    }


        </main>

    )
}