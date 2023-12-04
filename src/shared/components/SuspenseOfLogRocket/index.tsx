import { Suspense } from 'react';
import SuspenseFallback from '../SuspenseErrorBoundary/SuspenseFallback';
import PlayingMovieList from './components/PlayingMovieList';

const SuspenseOfLogRocket = () => {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <PlayingMovieList />
    </Suspense>
  );
};

export default SuspenseOfLogRocket;
