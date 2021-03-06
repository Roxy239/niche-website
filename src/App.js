
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import AllWatches from './Pages/AllWatches/AllWatches';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking/Booking';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrderlist from './Pages/MyOrderlist/MyOrderlist';
import Admin from './Pages/Dashboard/Admin/Admin';
import useAuth from './hooks/useAuth';
import { useState, useEffect } from 'react';
// import useFirebase from './hooks/useFirebase';

function App() {
  // const { user } = useAuth();

  // console.log("testing from app", user);
  // const [isAdmin, setAdmin] = useState(false);

  // if (user?.role === "admin") {
  //   setAdmin(true);
  // }

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/allwatches">
              <AllWatches></AllWatches>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/booking/:watchId">

              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard />

            </PrivateRoute>
            <PrivateRoute path="/admin/dashboard">
              <Admin />

            </PrivateRoute>
            {/* <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute> */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
