import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/start';
import Menu from './pages/menu';
import Navbar from './components/navbar';
import DefaultPage from './components/defaultPage';

// Single Page Application

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Navbar /* Menu é carregado em todas as páginas */ />
        <Routes /* Rotas: */ >
          <Route path='/' element={<DefaultPage/>} /* Childrens: */ >
            <Route index element={<Start/>} /* index = proprio path / = Start */ />
            <Route path='menu' element={<Menu/>} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}