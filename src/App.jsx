// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Header";
import Dashboard from "./pages/Dashboard";
import Categories from "./Components/categories";   // ✅ fixed capitalization
import LoginPage from "./pages/login";             // ✅ after renaming file to Login.jsx
import SignIn from "./pages/SignIn";
import InfoSection from "./Components/InfoSection";
import AppPromo from "./Components/AppPromo";
import Footer from "./Components/Footer";

import Pizza from "./pages/Pizza";
import Burger from "./pages/Burger";
import Cake from "./pages/Cake";                   // ✅ singular
import Biryani from "./pages/Biryani";
import Chinese from "./pages/Chinese";
import Dhokla from "./pages/Dhokla";
import NorthIndia from "./pages/NorthIndia";
import Khichdi from "./pages/Khichdi";
import Instamart from "./Components/Instamart";

import { BACKEND_URL } from "./config";

const App = () => {
  console.log("Backend endpoint:", BACKEND_URL);

  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <Dashboard />
                <Categories />   {/* ✅ fixed uppercase */}
                <InfoSection />
                <AppPromo />
                <Footer />
              </>
            }
          />

          {/* Other pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/burger" element={<Burger />} />
          <Route path="/cake" element={<Cake />} />        {/* ✅ fixed */}
          <Route path="/biryani" element={<Biryani />} />
          <Route path="/chinese" element={<Chinese />} />
          <Route path="/dhokla" element={<Dhokla />} /> 
          <Route path="/NorthIndia" element={<NorthIndia />} />
          <Route path="/Khichdi" element={<Khichdi />} />
          <Route path="/Instamart" element={<Instamart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
