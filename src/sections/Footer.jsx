import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center relative mt-10 flex flex-col gap-5 font2 text-white-50 ">
      <div className="w-full h-[1px] bg-[#212121] absolute top-0 left-0  ">
        <div className="w-2 h-2 bg-gray-300 rounded-full mx-auto mt-[-5px]"></div>
      </div>

      <h2 className="text-3xl font-bold mt-16">Franklin IO</h2>
      <p className="text-sm mt-2  font-bold">
        © 2025. All rights reserved, <span className="font-semibold ">Route Innovation</span>.
      </p>
    </footer>
  );
};

export default Footer;
