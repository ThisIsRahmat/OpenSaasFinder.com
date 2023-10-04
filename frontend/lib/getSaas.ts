
import {supabase} from '../utils/supabase'

export const getOpensaas = async (searchQuery: string) => {


  interface Saas {
    name: string;
    description: string;
    website: string;
    github: string;
    }


    //extract closedsaas_id that matches the search query
  const closedSaasIdQuery = await supabase
    .from('closedSaas')
    .select('id')
    .ilike('name', `${searchQuery}`);


  const closedSaasId = closedSaasIdQuery.data[0]?.id;


  //using the closedsaa_id find opensaas_ids that match the searched closed saas

  const openSaasIdQuery = await supabase
  .from('_ClosedSaaSToOpenSaas')
  .select('opensaas_id')
  .eq('closedsaas_id', closedSaasId);

  //store opensaasIds in an array
  const openSaasIds: number[] = openSaasIdQuery.data ? openSaasIdQuery.data.map(row => row.opensaas_id) : [];


  let opensaas_data: Saas[] = []

  // itterate through IDs and grab the details of OpenSaas that match our closed Saas query from the opensaasId

   for (let openSaasId of openSaasIds ){

    const { data, error } = await supabase
    .from('openSaas')
    .select('name, description, website, github')
    .eq('id', openSaasId)

      if (error) {
    console.error('Error fetching OpenSaas companies:', error);
    return [];
  }



  opensaas_data.push(data[0])


   }



 
 
   console.log("This is the Open Source Saas products for " + searchQuery + " " )
 
   for (let opensaas of opensaas_data) {
     console.log(`Name: ${opensaas.name}`);
     console.log(`Description: ${opensaas.description}`);
     console.log(`Website: ${opensaas.website}`);
     console.log(`GitHub: ${opensaas.github}`);
   }

   console.log(opensaas_data)
 
   return opensaas_data
 };
