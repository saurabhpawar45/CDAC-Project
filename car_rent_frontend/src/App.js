
import './App.css';
import "@stripe/stripe-js";
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar/Navbar';
import NavbarAfterLogin from './Components/Navbar/NavbarAfterLogin';
import Login from './Components/Login';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import Listcars from './Components/Listcars';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import AddCar from './Components/AddCar';
import AdminPage from './Components/AdminPage';
import BookCar from './Components/BookCar';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Navbar/>
          <HomePage/>
        </Route>
        <Route exact path='/login'>
        <Navbar/>
          <Login/>
        </Route>
        <Route exact path='/forgotpassword'>
          <ForgotPassword/>
        </Route>
        <Route exact path='/register'>
        <Navbar/>
        <Register/>
        </Route>
        <Route exact path='/aboutus'>
        <NavbarAfterLogin/>
          <Aboutus/>
        </Route>
        <Route exact path='/contactus'>
        <NavbarAfterLogin/>
          <Contactus/>
        </Route>
        <Route exact path='/listcars/:startDate/:endDate/:carLocation'>
        <NavbarAfterLogin/>
          <Listcars/>
        </Route>
        <Route exact path='/adminpage'>
        <NavbarAfterLogin/>
          <AdminPage/>
        </Route>
        <Route exact path='/addcar'>
        <NavbarAfterLogin/>
          <AddCar/>
        </Route>
        <Route exact path='/addcar/:id'>
        <NavbarAfterLogin/>
          <AddCar/>
        </Route>
        <Route exact path='/car/:id'>
        <NavbarAfterLogin/>
          <BookCar/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
