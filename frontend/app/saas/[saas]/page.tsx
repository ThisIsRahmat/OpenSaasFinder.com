

import { useRouter, usePathname } from 'next/navigation'
import { getOpensaas } from "../../../lib/getSaas"


import Results from '../../../components/Results'
interface saasType {
    name: string;
    description: string;
    website: string;
    github: string;
    logo: string;
    }

    interface ResultsProps {
        searchText: string;
        results: saasType[];
    }

export default async function SaasPage({ params, results }: { params: { saas: string }, results: saasType[] }) {

    results = await getOpensaas(params.saas)
    return (
<main>


    <Results searchText={params.saas} results={results}/>

</main>
    )
}