"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { ProfileSidebar } from "./profile-sidebar";

export const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const menus = [
    {
      label: "Dashboard",
      icon: "/icons/dashboard.svg",
      link: "/",
    },
    {
      label: "Biodata",
      icon: "/icons/biodata.svg",
      link: "/biodata",
    },
    {
      label: "Proposal",
      icon: "/icons/proposal.svg",
      link: "/proposal",
    },
    {
      label: "Penilaian",
      icon: "/icons/penilaian.svg",
      link: "/penilaian",
    },
    {
      label: "Monev",
      icon: "/icons/monev.svg",
      link: "/monev",
    },
    {
      label: "Document",
      icon: "/icons/document.svg",
      link: "/document",
    },
    {
      label: "Insentif",
      icon: "/icons/insentif.svg",
      link: "/insentif",
    },
    {
      label: "Repository",
      icon: "/icons/repository.svg",
      link: "/repository",
    },
    {
      label: "Laporan Hasil",
      icon: "/icons/laporan-hasil.svg",
      link: "/laporan-hasil",
    },
  ];
  return (
    <aside className='max-w-[256px] w-full bg-[#10487A] min-h-dvh fixed left-0'>
      <div className='flex flex-col gap-2 p-4'>
        <ProfileSidebar />
        <ul className='flex flex-col gap-1'>
          {menus.map((menu) => (
            <li key={menu.link}>
              <Link
                href={menu.link}
                className={`${
                  pathname === menu.link
                    ? "flex items-center gap-2 p-2 text-white bg-[#406D95] rounded-lg"
                    : "flex items-center gap-2 p-2 text-white"
                }`}
              >
                <Image
                  src={menu.icon}
                  width={24}
                  height={24}
                  alt={menu.label}
                />
                <p className='font-[500] text-sm'>{menu.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
