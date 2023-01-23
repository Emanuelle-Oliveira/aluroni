import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Start from './pages/start';
//import Menu from './pages/menu';
import Navbar from './components/navbar';
//import DefaultPage from './components/defaultPage';
//import About from './pages/about';
import Footer from './components/footer';
//import NotFound from './pages/notFound';
import Dish from './pages/dish';
import {lazy, Suspense} from 'react';

// No run build gera 2 arquivos, um js e css por conta dos imports
// O ideal é separar - Code splitting
// Imports de forma dinamica - Dynamic imports
// React.lazy
const Menu = lazy(() => import('./pages/menu'));
const DefaultPage = lazy(() => import('./components/defaultPage'));
const Start = lazy(() => import('./pages/start'));
const About = lazy(() => import('./pages/about'));
const NotFound = lazy(() => import('./pages/notFound'));

// Single Page Application
export default function AppRouter() {
  //console.log(Menu()); // Mostra objeto no navegador, com as props do Menu e outros parametros
  return (
    <main className='container'>
      <Router>
        <Navbar /* Menu é carregado em todas as páginas */ />
        {/* Suspense para o lazy*/}
        <Suspense fallback={<p> Carregando...</p>}>
          <Routes /* Rotas: */ >
            <Route path='/' element={<DefaultPage/>} /* Nested Routes - Childrens: */ >
              <Route index element={<Start/>} /* index = proprio path / = Start */ />
              <Route path='menu' element={<Menu/>} />
              <Route path='about' element={<About/>} />
            </Route>
            <Route path='dish/:id' element={<Dish/>} /* Insere o id na rota */ />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Suspense>
        <Footer/>
      </Router>
    </main>
  );
}