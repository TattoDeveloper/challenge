import { query } from 'express';
import { useEffect, useState } from 'react';
import { adapter } from '../adapter/adapter';

export const useAdapter = <T, K>( symbol: any, params: T[] ) => {
  const [data, setData] = useState<K[] | K | undefined>( undefined );
  const [isLoad, setLoad] = useState( true );
  const [error, setError] = useState( null );

  useEffect( () => {
    async function get() {
      const { data, error } = await adapter<T, K[] | K>( symbol, params );
      
      if ( data ) {
        setData( data );
      }
      if ( error ) {
        setError( error );
      }
      setLoad( false );
    }
    get();
  }, params );


  return { data, isLoad, error };
};
