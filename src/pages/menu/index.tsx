import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import {useState} from "react";
import Search from "./search";
import Filters from "./filters";
import Order from "./order";
import Items from "./items";

export default function Menu () {
  // State para a busca
  const [search, setSearch] = useState("");
  // State para filtros
  const [filter, setFilter] = useState <number | null> (null);
  // State para ordenador
  const [order, setOrder] = useState ("");

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
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter} /* Passa as props filtro e setFiltro para os filtros*//>
          <Order order={order} setOrder={setOrder} /* Passa as props order e setOrder para o ordenador*//>
        </div>
        <Items search={search} filter={filter} order={order} />
      </section>
    </main>
  )
}

//<img src={logo} alt="logo do aluroni"/>