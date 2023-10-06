
import {supabase} from '../utils/supabase'

export const getOpensaas = async (searchQuery: string) => {


  interface Saas {
    name: string;
    description: string;
    website: string;
    github: string;
    logo: string;
    }


    //extract closedsaas_id that matches the search query
  const closedSaasIdQuery = await supabase
    .from('closedSaas')
    .select('id')
    .ilike('name', `${searchQuery}`);


    const closedSaasId: number | null = closedSaasIdQuery.data?.[0]?.id ?? null;




  //using the closedsaa_id find opensaas_ids that match the searched closed saas

  if (closedSaasId !== null) {

  const openSaasIdQuery = await supabase
  .from('_ClosedSaaSToOpenSaas')
  .select('opensaas_id')
  .eq('closedsaas_id', closedSaasId);

  //store opensaasIds in an array
  const openSaasIds: number[] = openSaasIdQuery.data ? openSaasIdQuery.data.map(row => row.opensaas_id) : [];


  let opensaas_data: Saas[] = []

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

  }

  else {
    return "Error unable to get the right closed Saas"
  }
 };
