function App() {
  return (
    <div className=' flex flex-col gap-2 p-4 justify-center items-center h-full border-orange-700 border-[80px]'>
      <p className=' text-center font-semibold opacity-50 text-sm'>Vite + React</p>
      <h1 className=' text-4xl text-black font-extrabold mb-4'>Hello World</h1>
      <p className=' text-center'>
        Deploying project to <span className=' font-semibold'>AWS S3 with CloudFront</span> and
        CI/CD with <span className=' font-semibold'>Github Actions</span>!
      </p>
      <p className=' text-center font-semibold text-sm opacity-50'>2023.12.01 ~ 02</p>
      <a
        className=' font-bold underline underline-offset-4 text-orange-500 hover:text-orange-300 mt-4'
        href='https://www.notion.so/AWS-S3-CI-CD-f7084cd5ab094485a2ebb86e05df951a'
      >
        Go to Notion for more information
      </a>
    </div>
  );
}

export default App;
