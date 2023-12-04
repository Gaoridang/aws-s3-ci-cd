import { Link, Outlet } from 'react-router-dom';
import LinkEl from './shared/components/shared/Link/Link';
import ListEl from './shared/components/shared/List';

function App() {
  return (
    <div className='grid grid-cols-[300px_1fr] h-full'>
      <div className='flex flex-col h-full p-8'>
        <Link to={'/'}>
          <h1 className=' font-extrabold text-4xl mb-8'>PROJECTS</h1>
        </Link>
        <ul className='flex flex-col gap-2'>
          <ListEl>
            <LinkEl to='/aws-s3-ci-cd'>AWS S3 and CloudFront with Github Actions CI/CD</LinkEl>
          </ListEl>
          <ListEl>
            <LinkEl to='/suspense-error-boundary'>Suspense and Error Boundary</LinkEl>
          </ListEl>
          <ListEl>
            <LinkEl to='/suspense-of-log-rocket'>Suspense of LogRocket</LinkEl>
          </ListEl>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
