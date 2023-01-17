import menu from 'data/menu.json';
import styles from './Start.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourHome from 'assets/nossa_casa.png';

export default function Start() {
  let recommendedDishes = [...menu]; // Coloca todos os itens do menu no array pratos recomendados
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()); // Ordena aleatoriamente o array
  recommendedDishes = recommendedDishes.splice(0,3); // Seleciona os 3 primeiros itens do array

  return (
    <section>
      <h3 className={stylesTheme.title}>
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
      <h3 className={stylesTheme.title}> Nossa casa </h3>
      <div className={styles.ourHome}>
        <img src={ourHome} alt="Casa do aluroni"/>.
        <div className={styles.ourHome__address}>
          Rua Vergueiro, 3185 <br/> <br/> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}