
import Link from 'next/link'
import { displayType } from "../lib/displayType"

export default function DisplayType(){



    const listTypes = displayType()

    return(


        <main>

            

            <div>

                {listTypes.map((t) => ( 
                <ul key={t.id}>
<Link href={t.id}>
<li></li>
</Link>
                </ul>
))}
            </div>
            </main>
    )
}