import filters from './filters.json';
import styles from "./Filters.module.scss";
import React from "react";
import classNames from "classnames";

// Atribui o tipo do objeto filter (do json) para o novo tipo IOption
type IOption = typeof filters[0];

interface Props {
  filter: number | null,
  setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({ filter, setFilter } : Props) {
  // Ao clicar em das opções de filtros
  function selectFilter(option: IOption) {
    // Caso o mesmo filtro seja clicado novamente, filtro recebe null
    if(filter === option.id) {
      return setFilter(null);
    }
    return setFilter(option.id); // Retorna o valor do id da opção clicada para o setFiltro
  }

  return (
    <div className={styles.filters}>
      {/* Roda o array de filtros, gerando um button para cada elemento */}
      {filters.map((option) => (
        <button
          /*className={`${styles.filters__filter} ${filter === option.id ? styles.filters__filter__ativo : ""}`  Muda o estilo da opção selecionada }*/
          className={classNames({
            [styles.filters__filter]: true,
            [styles.filters__filter__active]: filter === option.id
          })}
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}