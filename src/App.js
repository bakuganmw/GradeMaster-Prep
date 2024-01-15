import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import Login from "./pages/Login";
import SectionsPage from "./pages/SectionsPage";
import SignUp from "./pages/SignUp";
import ChaptersPage from "./pages/ChaptersPage";
import ClosedExecisePage from "./pages/ClosedExecisePage";
import RownaniaPuzzle from "./chapterPages/RownaniaPuzzle";
import RownaniaWstep from "./chapterPages/RownaniaWstep";
import ChangeUsername from "./pages/ChangeUsername";
function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} exact />
          <Route path="/login" element={<Login/>} exact />
          <Route path="/sections" element={<SectionsPage/>} exact />
          <Route path="/signup" element={<SignUp/>} exact />
          <Route path={"/sections/:sectionName"} element={<ChaptersPage/>} exact />
          <Route path="/closedQuestions" element={<ClosedExecisePage/>} exact />
          <Route path="/sections/:sectionName/Równania/puzzle" element={<RownaniaPuzzle/>} exact />
          <Route path="/sections/:sectionName/Równania" element={<RownaniaWstep/>} exact />
          <Route path="/changeName" element={<ChangeUsername/>} exact />
        </Routes>
      </Router>
    );
  }
  
  export default App;