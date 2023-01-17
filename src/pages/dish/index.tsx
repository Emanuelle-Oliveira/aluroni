import styles from './Dish.module.scss';
import {useNavigate, useParams} from 'react-router-dom';
import menu from 'data/menu.json';
import TagsDish from '../../components/tagsDish';

export default function Dish() {
  //console.log(useParams());  Pega os parâmetros da url (id)
  //console.log(useLocation()); // Pega varias informações do pathname, uma delas é o state
  //const { state } = useLocation();  Pega o state do useLocation com as informações do prato clicado
  //const { dish } = state as {dish: typeof menu[0]};  Prato deve ser tipado
  const {id} = useParams();
  const navigate = useNavigate();

  // Procura no array qual item tem o id igual ao passado na url
  const dish = menu.find(item => item.id === Number(id));
  // Se o prato não for encontrado retorna uma string vazia
  if(!dish) {
    return '';
  }

  return(
    <div>
      <section className={styles.container}>
        <button className={styles.back} onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
        <h1 className={styles.title}>
          {dish.title}
        </h1>
        <div className={styles.image}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>
            {dish.description}
          </p>
          <TagsDish {...dish}/>
        </div>
      </section>
    </div>
  );
}