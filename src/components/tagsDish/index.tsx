import classNames from 'classnames';
import styles from './TagasDish.module.scss';
import {Dish} from '../../types/dish';

export default function TagsDish({ category, size, serving, price } : Dish) {
  return(
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__type]: true,
        [styles[`tags__type__${category.label.toLowerCase()}`]]: true // Adiciona a classe correta de acordo com a categoria do item
      })}>
        {category.label}
      </div>
      <div className={styles.portion}>
        {size}g
      </div>
      <div className={styles.tags__quantitypeople}>
        Serve {serving} pessoa{serving === 1 ? '' : 's' /* Caso sirva mais de 1 pessoa, acrescenta o s em pessoa */}
      </div>
      <div className={styles.tags__value}>
        R$ {price.toFixed(2) /*.00*/ }
      </div>
    </div>
  );
}