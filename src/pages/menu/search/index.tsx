import React, {memo, useMemo} from 'react';
import styles from './Search.module.scss';
import {CgSearch} from 'react-icons/cg';

interface Props {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

function Search({ search, setSearch }: Props) {
  // Hook para aplicar o memo em elementos
  // Funciona como o useEffect
  const elemento = useMemo(() => (
    <CgSearch size={20} color="#4C4D5E"/>
  ), []);
  return (
    <div className={styles.search}>
      <input
        value={search}
        // Passa o valor do input para o setBusca
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Buscar"
      />
      {elemento}
    </div>
  );
}

export default memo(Search);