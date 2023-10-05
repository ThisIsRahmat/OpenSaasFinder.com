
import Link from 'next/link'

export default function Header (){

    return (
    <header>
    <nav class="w-screen px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" class="flex items-center">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Open Saas Finder</span>
            </Link>
            <div class="flex items-center lg:order-2">
                <Link href="#" class="text-white font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none bg-black ">Submit an opensource saas</Link>
            
            </div>

        </div>
    </nav>
</header>
    )
}