import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ForBorrowers from './pages/ForBorrowers';
import ForLenders from './pages/ForLenders';
import AboutUs from './pages/AboutUs';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/borrowers" element={<ForBorrowers />} />
            <Route path="/lenders" element={<ForLenders />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/dashboard" element={<UserDashboard />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;