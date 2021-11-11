import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddServices from './components/AddServices/AddServices';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageOrders from './components/ManageOrders/ManageOrders';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import OrderPlace from './components/OrderPlace/OrderPlace';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Singup from './components/Singup/Singup';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    // Router set 
    <AuthProvider>
      <BrowserRouter>
        {/* header load in all page  */}
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/offer/:offerId">
            <DoctorDetails></DoctorDetails>
          </PrivateRoute>
          <PrivateRoute exact path="/orderplace">
            <OrderPlace></OrderPlace>
          </PrivateRoute>
          <PrivateRoute exact path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/manageorders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/addservices">
            <AddServices></AddServices>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/singup">
            <Singup></Singup>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* footer load in all page */}
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
