import React from 'react'

const LiDropDown = React.memo(({ link, children }) => {
  return (
    <li className="w-full">
      <a
        className="block w-full px-2 py-1 text-center transition-all duration-300 hover:bg-port-gore-700"
        href={link}
      >
        {children}
      </a>
    </li>
  );
});

export default LiDropDown;