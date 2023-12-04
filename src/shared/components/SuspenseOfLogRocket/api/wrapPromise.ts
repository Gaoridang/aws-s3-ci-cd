interface wrappedPromise<T> {
  read: () => T;
}

function wrapPromise<T>(promise: Promise<T>): wrappedPromise<T> {
  let status = 'pending';
  let result: T;

  const suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    }
  );

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw result;
      default:
        return result;
    }
  };

  return { read };
}

export default wrapPromise;
