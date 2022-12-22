import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import ApplicForm from "pages/ApplicForm";
import { Routes, Route } from "react-router-dom"




function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/register" element={<RegisterPage />} />
      <Route path="/application" element={<ApplicForm />} />
    </Routes>
  );
}

export default App;
