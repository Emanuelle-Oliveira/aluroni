import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/start';
import Menu from './pages/menu';
import Navbar from './components/navbar';
import DefaultPage from './components/defaultPage';
import About from './pages/about';
import Footer from './components/footer';
import NotFound from './pages/notFound';
import Dish from './pages/dish';

// Single Page Application

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Navbar /* Menu é carregado em todas as páginas */ />
        <Routes /* Rotas: */ >
          <Route path='/' element={<DefaultPage/>} /* Nested Routes - Childrens: */ >
            <Route index element={<Start/>} /* index = proprio path / = Start */ />
            <Route path='menu' element={<Menu/>} />
            <Route path='about' element={<About/>} />
          </Route>
          <Route path='dish/:id' element={<Dish/>} /* Insere o id na rota */ />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}