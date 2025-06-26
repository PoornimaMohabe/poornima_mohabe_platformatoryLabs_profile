import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { UserProvider } from "./context/UserContext";
import EditProfilePage from "./pages/EditProfilePage";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-profile/:id" element={<EditProfilePage />} />

        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

