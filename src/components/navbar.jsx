"use client";

import Image from "next/image";
import Link from "next/link";

const Path = (props) => (
  <path
    fill='transparent'
    strokeWidth='3'
    stroke='black'
    strokeLinecap='round'
    {...props}
  />
);

const HamburgerMenu = ({ onClick }) => {
  return (
    <div className='block cursor-pointer pr-2' onClick={onClick}>
      <svg width='23' height='18' viewBox='0 0 23 18'>
        <Path
          d='M 2 2.5 L 20 2.5'
          className='top'
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path d='M 2 9.423 L 20 9.423' opacity='1' className='middle' />
        <Path
          d='M 2 16.346 L 20 16.346'
          className='bottom'
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </div>
  );
};

export const Navbar = () => {
  return (
    <nav className='shadow  fixed top-0 r-0 bg-white w-full z-50'>
      <div className='flex justify-between items-center py-4 px-7'>
        <div className='flex items-center justify-between w-[236px] p-2'>
          <Link href='/'>
            <Image src='/unsia.svg' width={80} height={25} alt='UNSIA' />
          </Link>
          <HamburgerMenu />
        </div>
        <div className='block mr-[7px]'>
          <div className='flex items-center justify-between p-2'>
            <div className='px-1 py-[2px] cursor-pointer'>
              <Image
                src='/icons/notif.svg'
                width={19}
                height={16}
                alt='notif'
              />
            </div>
            <div className='flex gap-1 px-1 py-[2px] mx-4 cursor-pointer'>
              <Image
                src='/icons/globe.svg'
                width={19}
                height={16}
                alt='notif'
              />
              <div className='flex items-center'>
                <p className='font-[500] text-xl text-[#666666]'>EN</p>
              </div>
              <Image src='/icons/arrow.svg' width={12} height={7} alt='notif' />
            </div>
            <div className='px-1 py-[2px] cursor-pointer'>
              <Image
                src='/icons/setting.svg'
                width={19}
                height={16}
                alt='notif'
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
