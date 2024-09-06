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

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ClientList" element={<ClientList />}/>
        <Route path="/ClientInfo" element={<ClientInfo />}/>
        <Route path="/ClientNew" element={<ClientNew />}/>
        <Route path="/ClientUpdate" element={<ClientUpdate />}/>
        <Route path="/DeviceHistory" element={<DeviceHistory />}/>
        <Route path="/DeviceList" element={<DeviceList />}/>
        <Route path="/DeviceNew" element={<DeviceNew />}/>
        <Route path="/DeviceUpdate" element={<DeviceUpdate />}/>
        <Route path="/ServiceNew" element={<ServiceNew />}/>
        <Route path="/ServiceUpdate" element={<ServiceUpdate />}/>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/ProfileHistory" element={<ProfileHistory />}/>
        <Route path="/ProfileUpdate" element={<ProfileUpdate />}/>
        <Route path="/UserList" element={<UserList />}/>
        <Route path="/Menu" element={<Menu />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
