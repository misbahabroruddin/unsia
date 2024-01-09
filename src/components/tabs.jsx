"use client";
import Image from "next/image";
import Link from "next/link";

import { SearchInput } from "./Input/search-input";
import { ListItem } from "@/app/(dashboard)/proposal/_components/list-item";

const List = ({ data }) => {
  return (
    <div className='flex flex-col gap-4 '>
      {data.map((item, index) => (
        <ListItem key={index} data={item} />
      ))}
    </div>
  );
};

export function Tabs({
  tabActive,
  selectedTab,
  dataPenelitian,
  dataPengabdian,
}) {
  return (
    <div className='flex flex-col gap-4 '>
      <div className='flex justify-between items-center gap-4'>
        <div className='flex justbe items-center gap-4'>
          <div className='flex gap-2'>
            <button
              className={
                tabActive === "penelitian"
                  ? "flex gap-2 items-center px-4 py-2 bg-[#10487A] rounded text-white "
                  : "flex gap-2 items-center px-4 py-2"
              }
              onClick={() => selectedTab("penelitian")}
            >
              {tabActive === "penelitian" ? (
                <Image
                  src='/icons/search-white.svg'
                  width={24}
                  height={24}
                  alt='tab'
                />
              ) : (
                <Image
                  src='/icons/search-black.svg'
                  width={24}
                  height={24}
                  alt='tab'
                />
              )}
              <p>Penelitian</p>
            </button>
            <button
              className={
                tabActive === "pengabdian"
                  ? "flex gap-2 items-center px-4 py-2 bg-[#10487A] rounded text-white"
                  : "flex gap-2 items-center px-4 py-2"
              }
              onClick={() => selectedTab("pengabdian")}
            >
              {tabActive === "pengabdian" ? (
                <Image
                  src='/icons/location-white.svg'
                  width={24}
                  height={24}
                  alt='tab'
                />
              ) : (
                <Image
                  src='/icons/location-black.svg'
                  width={24}
                  height={24}
                  alt='tab'
                />
              )}
              <p>Pengabdian</p>
            </button>
          </div>
          <SearchInput />
        </div>
        <Link href='/proposal/add'>
          <button className='flex gap-2 items-center px-4 py-2 bg-[#23B900] rounded text-white '>
            <Image
              src='/icons/plus-circle-white.svg'
              width={24}
              height={24}
              alt='tab'
            />
            <p>Pengajuan</p>
          </button>
        </Link>
      </div>
      <div className='h-[700px] overflow-auto'>
        {tabActive === "penelitian" ? (
          <List data={dataPenelitian} />
        ) : (
          <List data={dataPengabdian} />
        )}
      </div>
    </div>
  );
}
