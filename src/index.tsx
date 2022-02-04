import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
      staleTime: 60000,
    },
  },
});

ReactDOM.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
, document.getElementById('root'));
