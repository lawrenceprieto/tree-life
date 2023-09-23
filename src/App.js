import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/tree-life" element={<NavBar />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
