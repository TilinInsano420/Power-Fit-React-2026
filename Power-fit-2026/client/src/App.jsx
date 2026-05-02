import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavbarPublic from './components/layout/NavbarPublic';
import Landing from './pages/public/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavbarPublic />}>
          <Route path="/" element={<Landing />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
