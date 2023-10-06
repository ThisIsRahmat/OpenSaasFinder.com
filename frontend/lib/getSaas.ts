
import {supabase} from '../utils/supabase'
import { saasType } from '../types/saasType'


export const getOpensaas = async (searchQuery: string) => {


  interface ClosedSaasIdData {
    id: number;
    // Add other properties if they exist in the data
  }

    //extract closedsaas_id that matches the search query
  const closedSaasIdQuery = await supabase
    .from('closedSaas')
    .select('id')
    .ilike('name', `${searchQuery}`);


    if (!closedSaasIdQuery) {
      console.log("Can't find a query")
      return []
    }


    const closedSaasId = closedSaasIdQuery.data && closedSaasIdQuery.data.length > 0 ? closedSaasIdQuery.data[0].id : null;



// console.log("This is type of data id")
// console.log(typeof closedSaasIdQuery.data![0].id)


// console.log("This is type of closedSaasIdQuery")
// console.log(typeof closedSaasIdQuery)

// console.log("This is type of closedSaasIdQuery.data[0].id")
// console.log(typeof closedSaasIdQuery.data[0].id)

  //using the closedsaa_id find opensaas_ids that match the searched closed saas

  if (closedSaasId !== null) {



  const openSaasIdQuery = await supabase
  .from('_ClosedSaaSToOpenSaas')
  .select('opensaas_id')
  .eq('closedsaas_id', closedSaasId);

  //store opensaasIds in an array
  const openSaasIds = openSaasIdQuery.data ? openSaasIdQuery.data.map(row => row.opensaas_id) : [];


  let opensaas_data: saasType[] = []

  // iterate through IDs and grab the details of OpenSaas that match our closed Saas query from the opensaasId

   for (let openSaasId of openSaasIds ){

    const { data, error } = await supabase
    .from('openSaas')
    .select('name, description, website, github, logo')
    .eq('id', openSaasId)

      if (error) {
    console.error('Error fetching OpenSaas companies:', error);
    return [];
  }



  opensaas_data.push(data[0])


   }



 

   return opensaas_data

  } else {

  console.log("closedSaasId is null")
return []
}


 };
