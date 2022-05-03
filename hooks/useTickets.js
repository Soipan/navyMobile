import {useQuery} from 'react-query';
import axios from 'axios';

const fetchTickets = async () => {
  try {
    const {data} = await axios.get('https://navy-ecru.vercel.app/api/tickets');
    return data;
  } catch (error) {
    console.log(error);
  }
};

const useTickets = () => useQuery('tickets', fetchTickets);
export default useTickets;
