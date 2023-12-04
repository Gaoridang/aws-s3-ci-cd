import { Response } from '../../SuspenseErrorBoundary/MovieShared/api';
import wrapPromise from './wrapPromise';

const fetchData = <T>(url: string, options: RequestInit) => {
  const response: Promise<Response<T>> = fetch(url, options).then((res) => res.json());

  return wrapPromise(response);
};

export default fetchData;
