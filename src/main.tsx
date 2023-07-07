import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'
import './global.css'

/*const router = createBrowserRouter([
  {
    path : "/",
    element: <MainPage/>,
  },
  {
    path : '/explorer',
    element: <Explorer/>
  },
]);*/

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
