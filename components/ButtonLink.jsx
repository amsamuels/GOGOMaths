import { useEffect, useState } from 'react';

const ButtonLink = ({ href, ...props }) => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
  }, []);
  const isActive = href === pathname || href === pathname.replace(/\/$/, '');

  return (
    <a
      href={href}
      rel='prefetch'
      className={` lg:inline-flex items-center justify-center sm:px-5 px-2.5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full
      ${
        isActive
          ? 'font-bold text-2xl  text-white  '
          : 'font-medium  text-teal-400 text-2xl '
      }`}
      {...props}
    >
      {props.children}
    </a>
  );
};

export default ButtonLink;
