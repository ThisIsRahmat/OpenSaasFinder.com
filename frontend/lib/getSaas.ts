
import {supabase} from '../utils/supabase'

export const getOpensaas = async (searchQuery: string) => {


 
interface saasType {
  name: string;
  description: string;
  website: string;
  github: string;
  logo: string;
  }

  interface ClosedSaasIdData {
    id: number;
    // Add other properties if they exist in the data
  }

    //extract closedsaas_id that matches the search query
  const closedSaasIdQuery = await supabase
    .from('closedSaas')
    .select('id')
    .ilike('name', `${searchQuery}`);


    // console.log("This is  closedSaasIdQuery" )
    // console.log(closedSaasIdQuery)
    // console.log("This is closedSaasIdQuery.data" )
    // console.log(closedSaasIdQuery.data)
    // console.log("This is closedSaasIdQuery.data.id")
    // console.log(closedSaasIdQuery.data[0].id)

    const closedSaasId: ClosedSaasIdData[] = closedSaasIdQuery.data![0].id;

  //using the closedsaa_id find opensaas_ids that match the searched closed saas



  const openSaasIdQuery = await supabase
  .from('_ClosedSaaSToOpenSaas')
  .select('opensaas_id')
  .eq('closedsaas_id', closedSaasId);

  //store opensaasIds in an array
  const openSaasIds: number[] = openSaasIdQuery.data ? openSaasIdQuery.data.map(row => row.opensaas_id) : [];


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




 };
