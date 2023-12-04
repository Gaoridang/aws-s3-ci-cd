import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AwsS3 from '../shared/components/Aws';
import SuspenseWithErrorBoundary from '../shared/components/SuspenseErrorBoundary';
import SuspenseOfLogRocket from '../shared/components/SuspenseOfLogRocket';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/aws-s3-ci-cd',
        element: <AwsS3 />,
      },
      {
        path: '/suspense-error-boundary',
        element: <SuspenseWithErrorBoundary />,
      },
      {
        path: '/suspense-of-log-rocket',
        element: <SuspenseOfLogRocket />,
      },
    ],
  },
]);
