import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import './App.css';
import CoachLogin from './components/coach/CoachLogin'
import CoachHome from './components/coach/CoachHome';
import CoachProfile from './components/coach/CoachProfile';
import CoachSignUp from './components/coach/CoachSignUp';

import UserSignUp from './components/user/UserSignUp';
import UserLogin from './components/user/UserLogin';
import UserHome from './components/user/UserHome';
import CoachSchedules from './components/coach/CoachSchedules';
import UserAppointments from './components/user/UserAppointments';
import UserProfile from './components/user/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/home' element={<Home />}></Route>
        <Route path='/coachsignup' element={<CoachSignUp />}></Route>
        <Route path='/coachlogin' element={<CoachLogin />}></Route>
        <Route path="/coachhome" element={<ProtectedRoute Component={CoachHome} />} />
        {/* <Route path='/coachhome' element={<CoachHome />}></Route> */}
        <Route path='/coachviewprofile' element={<CoachProfile />}></Route>
        <Route path='/coachschedules' element={<CoachSchedules />}></Route>
        <Route path='/usersignup' element={<UserSignUp />}></Route>
        <Route path='/userlogin' element={<UserLogin />}></Route>
        <Route path='/userhome' element={<UserHome />}></Route>
        <Route path='/userviewprofile' element={<UserProfile />}></Route>
        <Route path='/userappointments' element={<UserAppointments />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;