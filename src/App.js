import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import Login from "./pages/Login";
import SectionsPage from "./pages/SectionsPage";
import SignUp from "./pages/SignUp";
function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} exact />
          <Route path="/login" element={<Login/>} exact />
          <Route path="/sections" element={<SectionsPage/>} exact />
          <Route path="/signup" element={<SignUp/>} exact />
        </Routes>
      </Router>
    );
  }
  
  export default App;