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
import AppConfirmation from './Components/AppConfirmation';
import StaffLogin from './Components/StaffLogin';
import Startpage from './Components/Startpage';
import StaffHomePage from './Components/StaffHomePage';
import Viewpatientrecords from './Components/viewpatientrecords';
import CancelAppointments from './Components/CancelAppointments';
export const CurrentContext = createContext(null);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Startpage/>}/>
          <Route path='Login' element={<Login />} />
          <Route path='StaffLogin' element={<StaffLogin/>}/>
          <Route path='Register' element={<SignUp />} /> 
          <Route path='BookApp' element={<BookApp />} />
          <Route path='Confirmation' element={<Confirmation />} />
          <Route path='AppConfirmation' element={<AppConfirmation/>}/>
          <Route path='ViewAppointments' element={<ViewAppointments/>}/>
          <Route path='View' element={<ViewMR/>}/>
          <Route path='HomePage' element={<Homepage/>}/> 
          <Route path='StaffHomePage' element={<StaffHomePage/>}/>
          <Route path='ViewPRecords' element={<Viewpatientrecords/>}/>
          <Route path='Cancel' element={<CancelAppointments/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
