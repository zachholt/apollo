'use client'

import { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [client] = useState(() => 
    new ApolloClient({
      uri: 'https://graphqlzero.almansi.me/api',
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
     
        },
      },
    })
  );

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};