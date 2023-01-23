import styles from './Menu.module.scss';
import {useState} from 'react';
import Search from './search';
import Filters from './filters';
import Order from './order';
import Items from './items';
import stylesTheme from 'styles/Theme.module.scss';

export default function Menu () {
  // State para a busca
  const [search, setSearch] = useState('');
  // State para filtros
  const [filter, setFilter] = useState <number | null> (null);
  // State para ordenador
  const [order, setOrder] = useState ('');

  //const teste = 'olá aluno';

  return (
    <section className={styles.menu}>
      {/*
      Ao clicar não muda o h1 na tela, pois não é um state
      <h1 onClick={() => {
        teste = 'hello world';
        console.log(teste);
      }>
        {teste}
      </h1>*/}
      <h3 className={stylesTheme.title}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} /* Passa as props busca e setBusca para o buscador *//>
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} /* Passa as props filtro e setFiltro para os filtros*//>
        <Order order={order} setOrder={setOrder} /* Passa as props order e setOrder para o ordenador*//>
      </div>
      <Items search={search} filter={filter} order={order} />
    </section>
  );
}

//<img src={logo} alt="logo do aluroni"/>