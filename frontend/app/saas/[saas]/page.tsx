'use client'

import { useRouter, usePathname } from 'next/navigation'

import Results from '../../../components/Results'

export default function SaasPage({ params, results }: { params: { saas: string } }){

    return (
<main>

    <Results searchText={params.saas}/>

</main>
    )
}