import React from 'react';
const Header = () => {

  return (
    <>
        <nav className="bg-gray-800 h-16 lg:h-20 text-white p-4 w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ">
          {/* Brand */}
          <a href="https://fyp24-30.bensonngu.cc" className="text-xl font-bold w-50 cursor-pointer r-14">I Like That Coffee</a>
        </nav>

    </>
  );
};

export default Header;
