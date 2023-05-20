import { useEffect, useState } from 'react';

const NavLink = ({ href, ...props }) => {
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
      className={`underline-offset-3px  items-center text-teal-400 ${
        isActive
          ? 'font-bold text-2xl  '
          : 'font-medium  text-teal-400 text-2xl '
      }`}
      {...props}
    >
      {props.children}
    </a>
  );
};

export default NavLink;
