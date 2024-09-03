import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store, persistor } from "./redux/store.js"; // Ajustado aquí
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ImageProvider from './components/LazyImage/ImageProvider.jsx';
import Loading from './components/Loading/Loading.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ImageProvider loading={Loading}>
          <App />
        </ImageProvider >
      </Provider>
    </PersistGate>
  </StrictMode>

  ,
)
