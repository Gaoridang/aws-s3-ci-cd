import { Suspense } from 'react';
import SuspenseFallback from './SuspenseFallback';
import MovieList from './MovieList';

const SuspenseWithErrorBoundary = () => {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <MovieList />
    </Suspense>
  );
};

export default SuspenseWithErrorBoundary;
