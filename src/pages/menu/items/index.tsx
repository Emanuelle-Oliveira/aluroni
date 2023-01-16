import menu from './items.json';
import Item from "./item";
import styles from './Items.module.scss';

export default function Items() {
  return (
    <div className={styles.items}>
      {menu.map(item => ( // Roda o array menu(json), buscando cada item
          <Item
            key={item.id}
            {...item} // Envia todas as informações (atributos) do item
          />
      ))}
    </div>
  )
}