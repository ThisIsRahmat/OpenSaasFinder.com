//displays all the types on the landing page of the site

import { supabase } from '../utils/supabase';

export const displayType = async () => {

    const { data, error } = await supabase
    .from('type')
    .select('name')
  

      if (error) {
    console.error('Error fetching types:', error);
    return [];
  }

  return data

}

//     const dataTypes: string[] = []

//   const { data, error } = await supabase.from('type').select('name');
  

  
//   if (error) {
//     console.error('Error fetching types:', error);
//     return [];
//   }

//   for (let dataType of data ) {

//     dataTypes.push(dataType.name)

//   }


// //   console.log(dataTypes)
//   return dataTypes;
// };
