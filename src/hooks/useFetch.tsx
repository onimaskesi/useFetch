import axios from 'axios';
import {useEffect, useReducer} from 'react';
import {ReducerType} from './types/ReducerType';

const reducer: ReducerType = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'setData':
      const {data} = payload!;
      return {...state, data, loading: false};

    case 'setError':
      const {error} = payload!;
      return {...state, error, loading: false};

    case 'loading':
      return {...state, loading: true};

    default:
      return state;
  }
};

function useFetch(url: string) {
  const [{data, loading, error}, dispatch] = useReducer(reducer, {
    data: [],
    loading: true,
    error: undefined,
  });

  async function fetchData() {
    dispatch({type: 'loading'});
    try {
      const {data: respData} = await axios.get(url);
      dispatch({type: 'setData', payload: {data: respData}});
    } catch (err) {
      const respError = err as Error;

      dispatch({type: 'setError', payload: {error: respError}});
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error, fetchData};
}

export default useFetch;
