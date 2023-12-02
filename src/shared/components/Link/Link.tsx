import { Link } from 'react-router-dom';

interface Props {
  to: string;
  children: React.ReactNode;
}

const LinkEl = ({ to, children }: Props) => {
  return (
    <Link
      className=' font-semibold text-md underline underline-offset-4 text-orange-500 hover:text-orange-300 transition-colors'
      to={to}
    >
      {children}
    </Link>
  );
};

export default LinkEl;
