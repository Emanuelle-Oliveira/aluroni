import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import {useState} from "react";
import Search from "./search";

export default function Menu () {
  // State para a busca
  const [search, setSearch] = useState("");

  return (
    <main>
      <nav className={styles.navbar}>
        <Logo/>
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search search={search} setSearch={setSearch} /* Passa as props busca e setBusca para o buscador *//>
      </section>
    </main>
  )
}

//<img src={logo} alt="logo do aluroni"/>