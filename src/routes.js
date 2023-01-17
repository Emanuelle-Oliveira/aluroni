import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/start';
import Menu from './pages/menu';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/menu' element={<Menu/>} />
      </Routes>
    </Router>
  );
}