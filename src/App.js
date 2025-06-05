import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingScreen from './components/LandingScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import ProfileView from './components/ProfileView';

const App = () => (
  <Routes>
    <Route path="/" element={<LandingScreen />} />
    <Route path="/LoginScreen" element={<LoginScreen />} />
    <Route path="/SignupScreen" element={<SignupScreen />} />
    <Route path="/ProfileView" element={<ProfileView />} />
  </Routes>
);

export default App;

