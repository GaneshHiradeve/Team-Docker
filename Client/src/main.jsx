import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './components/redux/store.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ReduxProvider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <App />
  </PersistGate>
  </ReduxProvider>
  // </React.StrictMode>,
)
