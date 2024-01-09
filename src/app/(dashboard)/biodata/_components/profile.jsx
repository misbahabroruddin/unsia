import Image from "next/image";

export const Profile = () => {
  return (
    <>
      <div className='flex flex-col gap-2 justify-center items-center border-b-[0.5px] border-[#CCCCCC] p-4'>
        <Image
          className='inline-block rounded-full'
          src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          width={280}
          height={280}
          alt='Profile'
        />
        <p className='text-[#666666] text-2xl text-center mb-1'>
          Hj. Esther Howard .S Si.,MMSI
        </p>
      </div>
      <div className='flex flex-col gap-2 px-[18px] py-5'>
        <h2 className='text-sm font-[500]'>Details</h2>
        <div className='flex gap-2'>
          <div className='flex flex-col gap-2 text-sm font-[500]'>
            <p>Rule</p>
            <p>Username</p>
            <p>NIP</p>
            <p>Kontak</p>
            <p>Email</p>
          </div>
          <div className='flex flex-col gap-2 text-sm font-[500] text-[#666666]'>
            {Array.from({ length: 5 }).map((_) => (
              <p>:</p>
            ))}
          </div>
          <div className='flex flex-col gap-2 text-sm font-[500] text-[#666666]'>
            <p>Rule</p>
            <p>Username</p>
            <p>NIP</p>
            <p>Kontak</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    </>
  );
};
