import menu from 'data/menu.json';
import styles from './Start.module.scss';
import Navbar from '../../components/navbar';

export default function Start() {
  let recommendedDishes = [...menu]; // Coloca todos os itens do menu no array pratos recomendados
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()); // Ordena aleatoriamente o array
  recommendedDishes = recommendedDishes.splice(0,3); // Seleciona os 3 primeiros itens do array

  return (
    <section>
      <h3 className={styles.title}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recommendations}>
        {recommendedDishes.map(item => ( // Para cada item do array é criado uma div
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__imagem}>
              <img src={item.photo} alt={item.title}/>
            </div>
            <button className={styles.recommended__button}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}