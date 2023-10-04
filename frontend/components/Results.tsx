import Link from 'next/link'



interface saasType {
    name: string;
    description: string;
    website: string;
    github: string;
    }

    interface ResultsProps {
        searchText: string;
        results: SaasType[];
    }

export default function Results({ searchText, results }: ResultsProps) {
    
    return (
        <main>

<div className="mt-10 flex justify-center gap-x-2">
    <h2>
        Open Source Saas alternatives to {searchText}
    </h2>
    </div>

 

  

        </main>

    )
}