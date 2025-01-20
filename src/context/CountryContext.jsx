import { createContext, useContext } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getData } from '../fetching/apiCountry';
import { useSearchParams } from 'react-router';

const CountryDataContext = createContext(null);

export const CountryContextProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));
  const { data, isLoading, error } = useQuery({
    queryKey: ['countries',page],
    queryFn: getData,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  queryClient.prefetchQuery({ queryKey: ['countries', page + 1], queryFn: getData });

  return (
    <CountryDataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </CountryDataContext.Provider>
  );
};

export const useCountryData = () => {
  return useContext(CountryDataContext);
};