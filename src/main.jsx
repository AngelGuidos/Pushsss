import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from './contexts/ConfigContext';
import { UserContextProvider } from './contexts/UserContexts';
import App from './App';
import UserMainPage from './Components/Pages/UserMainPage/UserMainPage';
import OrgMainPage from './Components/Pages/OrgMainPage/OrgMainPage';
import AnimalsFound from './Components/Pages/User/AnimalsFound/AnimalsFound';
import Adoptions from './Components/Pages/User/Adoptions/Adoptions';
import RescueAnimals from './Components/Pages/User/RescueAnimals/RescueAnimals';
import AFRequests from './Components/Pages/User/AnimalsFound/AFRequests/AFRequests';
import AdoptionRequests from './Components/Pages/User/Adoptions/AdoptionsRequests/AdoptionRequests';
import MyAdoptionsRequests from './Components/Pages/User/Adoptions/MyAdoptionsRequests/MyAdoptionsRequests';
import RescueAnimalsR from './Components/Pages/User/RescueAnimals/RescueAnimalsR/RescueAnimalsR';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import axios from 'axios';
axios.defaults.baseURL= import.meta.env.VITE_APIENDPOINT || "https://api-production-dbfa.up.railway.app/api";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ConfigProvider>
        <UserContextProvider>
          <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/userpage' element={<UserMainPage />} />
            <Route path='/orgpage' element={<OrgMainPage />} />
            <Route path='/useranimalsfound' element={<AnimalsFound />} />
            <Route path='/useradoptions' element={<Adoptions />} />
            <Route path='/userrescueanimals' element={<RescueAnimals />} />
            <Route path='/userafrequests' element={<AFRequests />} />
            <Route path='/useradopr' element={<AdoptionRequests />} />
            <Route path='/usermyadopr' element={<MyAdoptionsRequests />} />
            <Route path='/usermyresanimrequests' element={<RescueAnimalsR />} />
          </Routes>
        </UserContextProvider>
      </ConfigProvider>
    </Router>
  </React.StrictMode>
)
