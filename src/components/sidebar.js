import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='sidebar flex justify-center items-center'>
      <div>
        <div>
          <div className='text-gray-600 italic text-center text-sm mb-2'>
            Live & Enjoy like a ...
          </div>
          <h1 className='jersey-10-charted-regular text-7xl'>Maddog</h1>
        </div>
        <ul className='mt-10 text-center'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/work'>Work</Link>
          </li>
          <li>
            <Link href='/travel'>Travel</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
