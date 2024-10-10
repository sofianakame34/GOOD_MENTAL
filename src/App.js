import logo from './LogoWORKSHOP.png';
import './App.css';
import ArticlesPage from './Components/UtilisateurComponents/interface3/ArticlesPage';
import UserquatreInterface from './Components/UtilisateurComponents/interface4/UserquatreInterface';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpFigma from './Components/SignUpFigma';
import NavBar from './Components/NavBar';
import Dashboard from './Components/dashboard';
import ChatList from './Components/chat';
import SignUpForm from './Components/SignUpForm';
import LayoutUser from './Components/UtilisateurComponents/interface2/components/LayoutUser';
import MainLayout from './Components/UtilisateurComponents/interface1/components/MainLayout';
import NotificationsComponent from './Components/Notification';
import NotificationsPage from './Components/NotificationPage';
import AboutPage from './Components/About';
import LoginPage from './Components/LoginPage/LoginPage';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/userquatre" element={<UserquatreInterface />} />
        <Route path="/SignUp" element={<SignUpFigma/>} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/ChatList" element={<ChatList />} />
        <Route path="/SignUpForm" element={<SignUpForm />} />
        <Route path="/UserquatreInterface" element={<UserquatreInterface />} />
        <Route path="/ArticlesPage" element={<ArticlesPage />} />
        <Route path="/LayoutUser" element={<LayoutUser/>} />
        <Route path="/MainLayout" element={<MainLayout/>} />
        <Route path="/NotificationsPage" element={<NotificationsPage/>} />
        <Route path="/AboutPage" element={<AboutPage/>} />
        <Route path="/LoginPage" element={<LoginPage/>} />



      </Routes>
    </div>
  </Router>
  );
}

export default App;
