import Image from "next/image";

import { ButtonStatus } from "@/components/Button/button-status";

export const ListItem = ({ data }) => {
  return (
    <div className='px-6 py-4 shadow rounded-lg'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-1 w-[631px]'>
          <h2 className='text-lg'>{data.title}</h2>
          <div className='flex gap-4'>
            <div className='flex gap-[2px] items-center'>
              <Image
                src='/icons/User.svg'
                height={24}
                width={24}
                alt='author'
              />
              <p className='text-sm text-[#999999]'>{data.author}</p>
            </div>
            <div className='flex gap-[2px] items-center'>
              <Image
                src='/icons/Book.svg'
                height={24}
                width={24}
                alt='mata kuliah'
              />
              <p className='text-sm text-[#999999]'>{data.matkul}</p>
            </div>
            <div className='flex gap-[2px] items-center'>
              <Image
                src='/icons/Clock.svg'
                height={24}
                width={24}
                alt='tanggal'
              />
              <p className='text-sm text-[#999999]'>{data.date}</p>
            </div>
          </div>
        </div>
        <div className='flex items-end gap-4'>
          <div className='flex flex-col items-center gap-1'>
            <p>LPPM</p>
            <ButtonStatus status={data.statusLPPM} />
          </div>
          <div className='flex flex-col items-center gap-1'>
            <p>Review</p>
            <ButtonStatus status={data.statusReview} />
          </div>
          <button className='px-7 py-2 bg-[#10487A] text-white rounded-lg'>
            Track
          </button>
          <button className='relative p-2 bg-white shadow rounded-lg'>
            <Image src='/icons/mail.svg' height={12} width={14} alt='review' />
            <div className='absolute top-0 -right-1 w-3 h-3 bg-red-500 rounded-full text-[10px] flex items-center justify-center text-white'>
              1
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
