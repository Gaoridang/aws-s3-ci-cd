import { Suspense } from 'react';
import SuspenseFallback from '../SuspenseErrorBoundary/SuspenseFallback';
import MovieList from './components/MovieList';

const SuspenseOfLogRocket = () => {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <MovieList />
    </Suspense>
  );
};

export default SuspenseOfLogRocket;
