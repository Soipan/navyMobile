import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import axios from 'axios';

const fetchTicket = async ticketId => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${ticketId}`,
  );
  return response.data;
};

const useTicket = ticketId =>
  useQuery(['tickets', ticketId], fetchTicket(ticketId));
export default useTicket;
