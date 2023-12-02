import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AwsS3 from '../shared/components/Aws';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/aws-s3-ci-cd',
    element: <AwsS3 />,
  },
  {
    path: '/suspense-error-boundary',
    element: <div>test</div>,
  },
]);
