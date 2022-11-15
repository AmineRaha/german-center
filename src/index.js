import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

<<<<<<< Updated upstream
=======
import bg from "./assets/images/pictures/_ABP3387.jpg";

>>>>>>> Stashed changes
import App from './App';
import "./index.css";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );