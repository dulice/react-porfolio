import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { StoreProvider } from './context/Store';
import Loading from './Components/Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = React.lazy(() => import('./App'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </StoreProvider>
  </React.StrictMode>
);
