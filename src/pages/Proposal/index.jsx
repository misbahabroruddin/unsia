"use client";

import { useState } from "react";

import { BasePageTitle } from "@/components/base-page-title";
import { Tabs } from "@/components/tabs";
import { capitalFirtsLatter } from "@/utils/capitalizeFirstLetter";

export const ProposalPage = ({ dataPenelitian, dataPengabdian }) => {
  const [tabActive, setTabActive] = useState("penelitian");
  const selectedTab = (tab) => {
    setTabActive(tab);
  };

  return (
    <div className='flex flex-col gap-4'>
      <BasePageTitle
        iconSrc='/icons/search-black.svg'
        title={capitalFirtsLatter(tabActive)}
      />
      <Tabs
        tabActive={tabActive}
        selectedTab={selectedTab}
        dataPenelitian={dataPenelitian}
        dataPengabdian={dataPengabdian}
      />
    </div>
  );
};
