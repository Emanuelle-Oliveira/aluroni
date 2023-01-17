import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // Array com as opções do navbar e suas respectivas rotas
  const routes = [{
    label: 'Início',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/menu'
  }, {
    label: 'Sobre',
    to: '/about'
  }];
  return (
    <nav className={styles.navbar}>
      <Logo/>
      <ul className={styles.navbar__list}>
        {routes.map((route, index) => ( // Gera um li para cada item do array rotas
          <li key={index} className={styles.navbar__link} /* Tag a href dá um refresh - Não usar */>
            <Link to={route.to}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}