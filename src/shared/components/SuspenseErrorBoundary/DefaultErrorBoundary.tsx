interface Props {
  error: Error;
}

const DefaultErrorBoundary = ({ error }: Props) => {
  return (
    <div>
      <h1>에러가 발생했습니다.</h1>
      <p>아래 버튼을 눌러 새로고침 하세요.</p>
      <p>{error.message}</p>
      <button>새로고침</button>
    </div>
  );
};

export default DefaultErrorBoundary;
