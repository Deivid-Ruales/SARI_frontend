import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Users/Login";
import ClientList from './Components/Clients/ClientList';
import ClientInfo from './Components/Clients/ClientInfo';
import ClientNew from './Components/Clients/ClientNew';
import ClientUpdate from './Components/Clients/ClientUpdate';
import DeviceHistory from './Components/Devices/DeviceHistory';
import DeviceList from './Components/Devices/DeviceList';
import DeviceNew from './Components/Devices/DeviceNew';
import DeviceUpdate from './Components/Devices/DeviceUpdate';
import ServiceNew from './Components/Services/ServiceNew';
import ServiceUpdate from './Components/Services/ServiceUpdate';
import Profile from './Components/Users/Profile';
import ProfileHistory from './Components/Users/ProfileHistory';
import ProfileUpdate from './Components/Users/ProfileUpdate';
import UserList from './Components/Users/UserList';
import Menu from './Components/Menu';
import Header from './Components/Header';
import Footer from './Components/Footer';
import UserNew from "./Components/Users/UserNew";
import WorkShiftList from "./Components/WorkShifts/WorkShiftList";
import WorkShiftNew from "./Components/WorkShifts/WorkShiftNew";
import WorkShiftUpdate from "./Components/WorkShifts/WorkShiftUpdate";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Menu />} />
        <Route exact path="/ClientList" element={<ClientList />}/>
        <Route exact path="/ClientInfo/:id" element={<ClientInfo />}/>
        <Route exact path="/ClientNew" element={<ClientNew />}/>
        <Route exact path="/ClientUpdate/:id" element={<ClientUpdate />}/>
        <Route exact path="/DeviceHistory/:id" element={<DeviceHistory />}/>
        <Route exact path="/DeviceList" element={<DeviceList />}/>
        <Route exact path="/DeviceNew" element={<DeviceNew />}/>
        <Route exact path="/DeviceUpdate/:id" element={<DeviceUpdate />}/>
        <Route exact path="/ServiceNew/:id" element={<ServiceNew />}/>
        <Route exact path="/ServiceUpdate/:id" element={<ServiceUpdate />}/>
        <Route exact path="/Profile/:id" element={<Profile />}/>
        <Route exact path="/ProfileHistory/:id" element={<ProfileHistory />}/>
        <Route exact path="/ProfileUpdate/:id" element={<ProfileUpdate />}/>
        <Route exact path="/UserList" element={<UserList />}/>
        <Route exact path="/UserNew" element={<UserNew />}/>
        <Route exact path="/WorkShiftList" element={<WorkShiftList />}/>
        <Route exact path="/WorkShiftNew" element={<WorkShiftNew />}/>
        <Route exact path="/WorkShiftUpdate/:id" element={<WorkShiftUpdate />}/>
        <Route exact path="/Menu" element={<Menu />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
