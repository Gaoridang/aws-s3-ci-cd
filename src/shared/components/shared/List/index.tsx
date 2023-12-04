import { PropsWithChildren } from 'react';

const ListEl = ({ children }: PropsWithChildren) => {
  return <li className=' list-disc'>{children}</li>;
};

export default ListEl;
