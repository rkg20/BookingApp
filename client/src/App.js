import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Hotel from './pages/Hotel';

import HotelList from './pages/HotelList';
// import Register from './pages/Register';
// import SignIn from './pages/SignIn';

// import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {/* <Route path='/register' element={<Register/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route> */}
          <Route path='/hotels' element={<HotelList/>}></Route>
          <Route path='/hotels/:id' element={<Hotel/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
