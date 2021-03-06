import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './search-box.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useSearchParams } from 'react-router-dom';


export function SearcBox() {
  const[ searchParams ] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('search') ?? '')
  const navigate = useNavigate()

  const changeQuery = ( { target }: ChangeEvent<HTMLInputElement> ) => {
     setQuery(target.value)
  }
  const submit = ( event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if( !query.match(/^\s+$|^$/gi) ) {
      navigate(`/items?search=${query}`)
    }
  }

  return (
      <form onSubmit={submit}>
        <div className={styles['search-container']}>
          <input 
           onChange={changeQuery}
           aria-label='Nunca pares de buscar'
           name='search'
           value={ query }
           className={styles['search-input']} 
           type='search' 
           placeholder='Nunca pares de buscar' 
          />
          <button type='submit' className={styles['search-submit']}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </form>
  );
}

export default SearcBox;
