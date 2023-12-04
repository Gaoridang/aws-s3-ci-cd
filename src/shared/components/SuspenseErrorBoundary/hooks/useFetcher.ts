import { useEffect, useRef, useState } from 'react';

type Status = 'initial' | 'pending' | 'fulfilled' | 'rejected';

interface UseFetcherProps<T> {
  data?: T;
  status: Status;
  error?: Error;
}

const useFetcher = <T>(fetchFc: () => Promise<T>): UseFetcherProps<T> => {
  const [state, setState] = useState<UseFetcherProps<T>>({
    data: undefined,
    status: 'initial',
    error: undefined,
  });
  const promiseRef = useRef<Promise<void>>();

  useEffect(() => {
    const fetchData = async () => {
      setState((prev) => ({ ...prev, status: 'pending' }));
      try {
        const response = await fetchFc();
        setState({ data: response, status: 'fulfilled', error: undefined });
      } catch (error) {
        if (error instanceof Error) {
          setState({ data: undefined, status: 'rejected', error: error });
        }
      }
    };
    console.log(state);
    if (state.status === 'initial') {
      promiseRef.current = fetchData();
    }
  }, [fetchFc, state]);

  if (state.status === 'pending') {
    throw promiseRef.current;
  }

  return state;
};

export default useFetcher;
