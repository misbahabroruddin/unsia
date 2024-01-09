import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: {
    default: "Dasboard",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function HomeLayout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className='flex mt-20'>
        <Sidebar />
        <main className='pt-4 pr-[35px] pl-4 grow ml-[256px]'>{children}</main>
      </div>
    </>
  );
}
