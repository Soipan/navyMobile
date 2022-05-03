import {useQuery} from 'react-query';
import axios from 'axios';

const fetchTickets = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  );
  return response.data;
};

const useTickets = () => useQuery('tickets', fetchTickets);
export default useTickets;
