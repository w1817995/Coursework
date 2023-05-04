import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookApp from './Components/BookAppointments';
import ViewAppointments from './Components/ViewAppointments';
import { createContext } from 'react';
import React from 'react';
import Login from './Components/Login';
import SignUp from './Components/Register';
import Confirmation from './Components/Confirmation';
import Homepage from './Components/HomePage';
import ViewMR from './Components/viewmrecords';
import AppConfirmation from './Components/AppConf';
import StaffLogin from './Components/StaffLogin';
export const CurrentContext = createContext(null);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='StaffLogin' element={<StaffLogin/>}/>
          <Route path='Register' element={<SignUp />} /> 
          <Route path='BookApp' element={<BookApp />} />
          <Route path='Confirmation' element={<Confirmation />} />
          <Route path='AppConfirmation' element={<AppConfirmation/>}/>
          <Route path='ViewAppointments' element={<ViewAppointments/>}/>
          <Route path='View' element={<ViewMR/>}/>
          <Route path='HomePage' element={<Homepage/>}/> 

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
