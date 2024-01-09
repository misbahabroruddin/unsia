import { BasePageTitle } from "@/components/base-page-title";
import { Profile } from "./_components/profile";

export default function BiodataPage() {
  return (
    <div className='flex flex-col gap-4'>
      <BasePageTitle iconSrc='/icons/biodata-black.svg' title='Biodata' />
      <section className='flex gap-4 ml-[7px]'>
        <div className='basis-[318.87px] flex flex-col h-fit shadow-custom rounded-lg'>
          <Profile />
        </div>
        <div className='flex flex-col gap-[15px] grow'>
          <div className='shadow-custom '>tab content</div>
        </div>
      </section>
    </div>
  );
}
