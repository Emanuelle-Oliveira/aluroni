import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import stylesTheme from 'styles/Theme.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate(); // Hook para retornar para tela anterior
  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTheme.container]: true
    })}>
      <div className={styles.back}>
        <button onClick={() => navigate(-1) // Vai para tela anterior
          // navigate('/') Volta para tela inicial
          // React Router possui um histórico em formato de pilha
          // que permite voltar para a pagina anterior
        }>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage/>
    </div>
  );
}