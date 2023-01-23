import styles from './Item.module.scss';
import {Dish} from '../../../../types/dish';
import TagsDish from '../../../../components/tagsDish';
import {useNavigate} from 'react-router-dom';
import {memo} from 'react';

function Item(props: Dish) {
  const { id, title, description, photo } = props;
  // É renderizado 2 vezes
  // States são imutaveis
  // A função set “destrói” completamente o estado anterior
  // e cria um estado totalmente novo.
  //(id === 5) && console.log(title);
  const navigate = useNavigate();
  return (
    <div
      className={styles.item}
      onClick={() => navigate(`/dish/${id}`)}
    >
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagsDish {...props}/>
      </div>
    </div>
  );
}
// Evita renderizações desnecessárias
// Indicada para listas e coisas que devem aparecer e sumir da tela
// Aceita 2 parametros
// Compara as props anteriores e as proximas props,
// e só renderiza se forem diferentes
// false -> diferentes, true -> iguais
export default memo(Item, /*(previousProps, nextProps) => {
  console.log(previousProps, nextProps);
  return true;
}*/);