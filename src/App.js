import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp/signup';
import Login from './pages/Login/login';
import ForgotPassword from './pages/PasswordForgot/forgotpassword';
import NewPassword from './pages/CreateNewPassword/newpassword';
import NotFound from './pages/PageNotFound/notfound';
import Overview from './components/Overview/overview';
import Profile from './components/Profile/profile';
import PRPInjectionDr from './pages/PRPInjectionsDr/prpinjectiondr';

function App() {
  return (
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/newpassword" element={<NewPassword/>} />
        <Route path="/notfound" element={<NotFound/>} />
        <Route path="/overview" element={<Overview/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/prpinjectiondr" element={<PRPInjectionDr/>} />
      </Routes>
  );
}

export default App;
