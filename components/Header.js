import ButtonLink from './ButtonLink';
import Image from 'next/image';
import NavLink from './NavLink';
import Link from 'next/link';
const Header = () => {
  return (
    <>
      <header className='bg-[#FCF8F1] bg-opacity-30'>
        <div className='px-4 mx-auto pt-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16 lg:h-20'>
            <div className='flex-shrink-0'>
              <Link href='/' className='flex'>
                <Image
                  src='/mathslogo.png'
                  alt="nexxel's avatar"
                  width={100}
                  height={100}
                  className='rounded-full border-none m-0 font-bold'
                />
              </Link>
            </div>

            <nav className='flex gap-3 items-center'>
              <NavLink href='/leaderboard'>Board</NavLink>
              <ButtonLink href='/play'>Start Game</ButtonLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
