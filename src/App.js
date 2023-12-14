import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import Login from "./pages/Login";
import SectionsPage from "./pages/SectionsPage";
import SignUp from "./pages/SignUp";
import ChaptersPage from "./pages/ChaptersPage";
function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} exact />
          <Route path="/login" element={<Login/>} exact />
          <Route path="/sections" element={<SectionsPage/>} exact />
          <Route path="/signup" element={<SignUp/>} exact />
          <Route path={"/sections/:sectionName"} element={<ChaptersPage/>} exact />
        </Routes>
      </Router>
    );
  }
  
  export default App;