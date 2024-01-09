import Image from "next/image";

export const ProfileSidebar = () => {
  return (
    <div className='flex items-center bg-[#0D3A62] rounded-lg'>
      <div className='flex items-center gap-2 py-3 pl-2'>
        <div>
          <Image
            className='inline-block rounded-full'
            src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            width={40}
            height={40}
            alt='Profile'
          />
        </div>
        <div className='block text-white'>
          <p className='font-[500] text-[14px]'>Username</p>
          <p className='font-normal text-[12px]'>Administrator</p>
        </div>
      </div>
    </div>
  );
};
