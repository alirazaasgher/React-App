import React ,{ useEffect, useState,useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter,Switch,Router } from 'react-router-dom';
import Header from './componments/HeaderComponment';
import RegisterUserComponment from './componments/registerUserComponment'
import UserSignInComponment from './componments/userSignInComponment'
import EditUserComponment from './componments/editUserComponment'
import LogoutUser from './componments/LogoutComponment'
import {UserProvider} from './componments/userContext'
import {ProtectedRoute} from './componments/ProtectedRoutes'
import AdminDashBoard from './componments/adminTemplate'
import AdminHeader from './componments/AdminHeader'

function App() {
  const [userRole,setRole] = useState("admin")
  return (
    <UserProvider value = "Ali">
    <div className="App">
     
      <BrowserRouter>
     {
      userRole=="visitor" || userRole== "user" ? 
      (
        <Header />
      ):
      (
       <AdminHeader/>
      )
    }
      <Switch>
      <Route path ="/registerUserComponment"  component={RegisterUserComponment}></Route>
     <Route path ="/signInUserComponment"  component={UserSignInComponment}></Route>
     <Route path ="/editUserComponment/:id"  component={EditUserComponment} ></Route>
     <Route path ="/logoutUser" component={LogoutUser}></Route>
     <ProtectedRoute exact path = "/adminPage" component={AdminDashBoard} />
     {/* <Route path ="/adminPage" component={LogoutUser}></Route> */}
     </Switch>
     </BrowserRouter>
    
    </div>
    </UserProvider>
  );
}

export default App;
