import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
