import Link from 'next/link';
import Logo from './logo/logo';
import { usePathname } from 'next/navigation';

const ROUTE_LABEL = {
  myself: '/',
  work: '/work',
  travel: '/travel'
};

const Sidebar = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className='sidebar flex flex-col'>
      <div className='w-full'>
        <Logo />
        <ul className='text-center flex justify-around items-center'>
          {Object.keys(ROUTE_LABEL).map((route) => (
            <li
              key={route}
              className={
                pathname === ROUTE_LABEL[route] ? 'active capitalize' : ''
              }
            >
              <Link href={ROUTE_LABEL[route]}>{route}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Pages Container */}
      <div className='page-holder flex-1 p-10'>{children}</div>
    </div>
  );
};

export default Sidebar;
