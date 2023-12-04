import { Suspense } from 'react';
import SuspenseFallback from './SuspenseFallback';
import MovieList from './MovieList';
import { ErrorBoundary } from './ErrorBoundaryClass';
import PlayingMovieList from '../SuspenseOfLogRocket/components/PlayingMovieList';

const SuspenseWithErrorBoundary = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<SuspenseFallback />}>
        <MovieList />
      </Suspense>
      <Suspense fallback={<SuspenseFallback />}>
        <PlayingMovieList />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseWithErrorBoundary;
