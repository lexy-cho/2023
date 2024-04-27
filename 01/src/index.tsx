import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Loading from './component/Loading';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      // refetchOnWindowFocus: true,
      staleTime: 60 * 1000, // 1분
      // refetchOnReconnect: true,
      retry:false
    },
  }
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={ <Loading/>}>
        <App />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
