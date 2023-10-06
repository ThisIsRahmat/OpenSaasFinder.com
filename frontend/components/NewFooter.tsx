import Link from 'next/link'

export default function NewFooter() {
return (
    <footer className="p-4  bg-white sm:p-6 ">
    <div className="mx-auto max-w-screen-xl">

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex ">
        
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <p className="text-sm sm:text-[16px] text-left">
            Built by <span className="underline-offset-2 underline"> <Link  href="https://twitter.com/thisis_rahmat">Rahmat Junaid</Link> </span> in 🇬🇧
            </p>
            </div>
        </div>
    </div>
</footer>
)
}