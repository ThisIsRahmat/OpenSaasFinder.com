

import {supabase} from '../utils/supabase'

//Fetch list of Types from the database in order to display on the homepage ans suggestions page


export const  displayType = async () => {



    let type_data: string[] = []
    for (let saasType of saasTypes ) {
      
 

    const { data, error } = await supabase
    .from('type')
    .select('name')


      if (error) {
    console.error('Error fetching OpenSaas companies:', error);
    return [];

      }

      type_data.push(data[0])
    }


      console.log(data)
      return type_data

}