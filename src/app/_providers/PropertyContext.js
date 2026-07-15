'use client';
import { createContext } from 'react';
import { useGetPropertiesQuery } from '@/common/store/rootApi';

export const PropertyContext = createContext(null);

export default function PropertyProvider({ children }) {
  const {
    data: properties,
    isError,
    isLoading,
    isFetching,
    error
  } = useGetPropertiesQuery();

  const values = { properties, isError, isLoading, isFetching, error };
  return (
    <PropertyContext.Provider value={values}>
      {children}
    </PropertyContext.Provider>
  );
}
