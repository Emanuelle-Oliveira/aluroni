import menu from 'data/menu.json';
import styles from './Start.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourHome from 'assets/nossa_casa.png';
import {useNavigate} from 'react-router-dom';
import {Dish} from '../../types/dish';

export default function Start() {
  let recommendedDishes = [...menu]; // Coloca todos os itens do menu no array pratos recomendados
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()); // Ordena aleatoriamente o array
  recommendedDishes = recommendedDishes.splice(0,3); // Seleciona os 3 primeiros itens do array

  const navigate = useNavigate(); // Redireciona para outra url

  function redirectToDetails(dish: Dish) {
    // Não é uma boa prática enviar as informants pelo state, já que se a url for acessada diretamente,
    // não é possível carregar as informações do prato, só possível clicando no botão 'ver mais'
    navigate(`/dish/${dish.id}`, { state: {dish}, /*replace: true*/});
    // 1º: De acordo com o item clicado redireciona para a rota /dish/id, passando o id do prato clicado
    // Navigate aceita um 2º parâmetro: o state e o replace

    // O state aceita qualquer coisa, nesse caso foi passado um objeto com o prato escolhido
    // Agora é possível acessar essas informações na página de detalhes do prato

    // O replace é um boolean, ele redireciona para a url indicada, caso seja true,
    // ele irá substituir a última rota do histórico do navegador pela rota passada no 1º parâmetro.
    // Sendo assim, caso voltássemos na rota anterior, não iríamos para essa rota substituída.
    // Exemplo: Após efetuar um login, não seria bom que essa página ficasse no histórico
  }

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
            <button
              className={styles.recommended__button}
              onClick={() => redirectToDetails(item)} // Ao clicar é chamada a função de redirecionamento com o item a ser detalhado
            >
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