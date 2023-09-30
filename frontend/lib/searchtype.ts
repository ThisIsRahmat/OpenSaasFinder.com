
import {supabase} from '../utils/supabase'

export const searchType = async (searchQuery: string) => {
    const { data, error } = await supabase
      .from('OpenSaas')
      .select('name, website, github')
      .eq('id', supabase.from('_ClosedSaaSToOpenSaas').select('openSaas_id').eq('closedSaaS_id', searchQuery));
  
    if (error) {
      console.error('Error fetching OpenSaas companies:', error);
      return [];
    }
  
    return data;
  };