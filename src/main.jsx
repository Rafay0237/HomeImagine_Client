import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store,persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, 
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
    <App />
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);

