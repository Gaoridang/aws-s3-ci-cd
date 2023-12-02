import LinkEl from './shared/components/Link/Link';

function App() {
  return (
    <div className='flex flex-col gap-2 border-[44px] border-green-700 h-full p-8'>
      <h1 className=' font-extrabold text-4xl '>PROJECTS</h1>
      <LinkEl to='/aws-s3-ci-cd'>AWS S3 and CloudFront with Github Actions CI/CD</LinkEl>
      <LinkEl to='/suspense-error-boundary'>Suspense and Error Boundary</LinkEl>
    </div>
  );
}

export default App;
