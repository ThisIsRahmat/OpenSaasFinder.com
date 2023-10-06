

import { useRouter, usePathname } from 'next/navigation'
import { getOpensaas } from "../../../lib/getSaas"


import Results from '../../../components/Results'


    interface ResultsProps {
        searchText: string;
    }

    interface PageProps {
        params: { slug: string };
        searchParams: { [key: string]: string | string[] | undefined };
      }

export default async function SaasPage({ params }: { params: { saas: string } }) {

   const results  = await getOpensaas(params.saas)
    return (
<main>


    <Results searchText={params.saas} results={results}/>

</main>
    )
}