
import {supabase} from '../utils/supabase'

export const searchOpensaas = async (searchQuery: string) => {


  interface Saas {
    name: string;
    description: string;
    website: string;
    github: string;
    }

  const closedSaasIdQuery = await supabase
    .from('closedSaas')
    .select('id')
    .eq('name', searchQuery);


  const closedSaasId = closedSaasIdQuery.data[0]?.id;

  console.log("This is the closedSaasId " + closedSaasId )

  const openSaasIdQuery = await supabase
  .from('_ClosedSaaSToOpenSaas')
  .select('opensaas_id')
  .eq('closedsaas_id', closedSaasId);



  const openSaasIds: number[] = openSaasIdQuery.data.map(row => row.opensaas_id);

  let opensaas_data: Saas[] = []

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
  

  console.log(searchQuery)
  console.log(opensaas_data)

  console.log("This is the Open Source Saas products for " + searchQuery + " " )

  for (let opensaas of opensaas_data) {
    console.log(`Name: ${opensaas.name}`);
    console.log(`Description: ${opensaas.description}`);
    console.log(`Website: ${opensaas.website}`);
    console.log(`GitHub: ${opensaas.github}`);
  }

  return opensaas_data
};
