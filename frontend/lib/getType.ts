
// import {supabase} from '../utils/supabase'

// //when a type is clicked return list of Saas that satisfy that Type

// export const getType = async (searchQuery: string) => {

 
//   const typeIdQuery = await supabase
//   .from('type')
//   .select('id')
//   .ilike('name', `${searchQuery}`);

//   const typeId = typeIdQuery.data[0]?.id;



//   const openSaasIdQuery = await supabase
//   .from('_ClosedSaaSToOpenSaas')
//   .select('opensaas_id')
//   .eq('closedsaas_id', typeId);

//     //store opensaasIds in an array
//     const openSaasIds: number[] = openSaasIdQuery.data ? openSaasIdQuery.data.map(row => row.opensaas_id) : [];



//     let opensaas_data: Saas[] = []

//     // iterate through IDs and grab the details of OpenSaas that match our closed Saas query from the opensaasId
  
//      for (let openSaasId of openSaasIds ){
  
//       const { data, error } = await supabase
//       .from('openSaas')
//       .select('name, description, website, github, logo')
//       .eq('id', openSaasId)
  
//         if (error) {
//       console.error('Error fetching OpenSaas companies:', error);
//       return [];
//     }
  
  
  
//     opensaas_data.push(data[0])
  
  
//      }
  
//      return opensaas_data
//   };