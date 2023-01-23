import menu from '../../../data/menu.json';
import Item from './item';
import styles from './Items.module.scss';
import {useEffect, useState} from 'react';
import {Menu} from '../../../types/dish';

interface Props {
  search: string,
  filter: number | null,
  order: string
}

export default function Items({ search, filter, order }: Props) {
  const [list, setList] = useState(menu);

  // Faz busca
  function testSearch(title: string) {
    const regex = new RegExp(search, 'i'/* Não sensitivo */);
    return regex.test(title);
  }

  // Filtro pela categoria
  function testFilter(id: number) {
    if(filter !== null) {
      return filter === id; // Retorna true se o id é igual, e false senão é
    }
    return true; // Se for nulo, não precisa fazer nada
  }

  // Ordena de acordo com o select
  function orderBy(newList: Menu){ // Define o tipo como um array de objetos com seus atributos já determinados no json
    switch (order) {
    // Ordena usando o tamanho da porção, retorna 1 para a>b e -1 para a<b
    case 'porcao':
      return newList.sort((a,b) => a.size > b.size ? 1 : -1);
    case 'qtd_pessoas':
      return newList.sort((a,b) => a.serving > b.serving ? 1 : -1);
    case 'preco':
      return newList.sort((a,b) => a.price > b.price ? 1 : -1);
    default:
      return newList;
    }
  }

  useEffect(() => {
    // Monta a nova lista utilizando o filtro e a busca
    const newList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id));
    setList(orderBy(newList));

  }, [search, filter, order]);
  // 1º parâmetro: arrow function
  // 2° parâmetro: dependências, quando busca ou filtro atualizarem, o useEffect roda

  return (
    <div className={styles.items}>
      {list.map((item) => ( // Roda o array menu(json), buscando cada item
        // Index com key não é ideal para listas não estaticas
        <Item
          key={item.id} // Auxilia na comparação o dom real e o virtual, não é prop
          {...item} // Envia todas as informações (atributos) do item
        />
      ))}
    </div>
  );
}