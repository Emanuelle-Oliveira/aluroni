import styles from './Order.module.scss';
import options from './options.json';
import React, {useState} from 'react';
import classNames from 'classnames';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';

interface Props {
  order: string,
  setOrder: React.Dispatch<React.SetStateAction<string>>
}

export default function Order({ order, setOrder } : Props) {
  const[open, setOpen] = useState(false);
  // Procura entre as opções qual possui o value igual ao order atual, guardando o nome desse ordenador
  const nameOrder = order && options.find(option => option.value === order)?.name;

  return (
    <button
      className={classNames({
        [styles.order]: true,
        [styles.order__active]: order !== '', // Adiciona essa classe quando o state order é diferente de vazio, ou seja, uma opção foi slecionada
      })}
      onClick={() => setOpen(!open)} // Muda o state aberto (true ou false)
      onBlur={() => setOpen(false)} // Muda o state aberto para false quando clicamos fora do botão
    >
      <span>{nameOrder || 'Ordenar por' /* Se order estiver como string vazia, então teremos essa frase */}</span>
      { /* Escolhe icone de acordo com o state aberto */
        open ?
          <MdKeyboardArrowUp size={20}/>
          :
          <MdKeyboardArrowDown size={20}/>
      }
      <div className={classNames({
        [styles.order__options]: true,
        [styles.order__options__active]: open // Adiciona essa classe quando aberto == true
      })}>
        {options.map(option => (
          <div
            className={styles.order__option} key={option.value}
            onClick={() => setOrder(option.value)} // Ao clicar em uma opção, o state de order recebe seu value
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}