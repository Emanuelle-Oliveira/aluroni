import styles from './Item.module.scss';
import menu from '../items.json';
import classNames from "classnames";

type Props = typeof menu[0];

export default function Item(props: Props) {
  const { title, description, category, size, serving, price, photo } = props;
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.item__type]: true,
            [styles[`item__type__${category.label.toLowerCase()}`]]: true // Adiciona a classe correta de acordo com a categoria do item
          })}>
            {category.label}
          </div>
          <div className={styles.item__portion}>
            {size}g
          </div>
          <div className={styles.item__quantitypeople}>
            Serve {serving} pessoa{serving === 1 ? "" : "s" /* Caso sirva mais de 1 pessoa, acrescenta o s em pessoa */}
          </div>
          <div className={styles.item__value}>
            R$ {price.toFixed(2) /*.00*/ }
          </div>
        </div>
      </div>
    </div>
  )
}