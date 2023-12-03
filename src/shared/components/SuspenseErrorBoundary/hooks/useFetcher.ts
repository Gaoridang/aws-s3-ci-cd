import { useEffect, useState } from 'react';

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prev) => ({ ...prev, status: 'pending' }));
        const response = await fetchFc();
        console.log(response);
        setState({ data: response, status: 'fulfilled', error: undefined });
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          setState({ data: undefined, status: 'rejected', error: error });
        }
      }
    };

    fetchData();
  }, [fetchFc]);

  if (state.status === 'pending') {
    throw new Promise((res) => {
      setTimeout(res, 2000);
    });
  }

  return state;
};

export default useFetcher;
