
import Link from 'next/link'

export default function Header (){

    return (
    <header>
    <nav className="w-screen px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className="flex items-center">
  {/* Create a logo for OpenSaas Finder and add it here */}
                <span className="self-center text-xl font-semibold whitespace-nowrap ">OpenSaas Finder</span>
            </Link>
            <div className="flex items-center lg:order-2">
                <Link href="#" className="text-white font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none bg-black ">Submit an opensource saas</Link>
            
            </div>

        </div>
    </nav>
</header>
    )
}