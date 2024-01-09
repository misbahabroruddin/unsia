import { BasePageTitle } from "@/components/base-page-title";
import { Stepper } from "@/components/stepper";
import { Tabs } from "@/components/tabs";
import { ProposalPage } from "@/pages/Proposal";

export default function ProposalPages() {
  const dataPenelitian = [
    {
      title:
        "Pelatihan Website Cms Wordpress Menggunakan Elementor SMK N 4 Payakumbuh",
      author: "Noviandri, S.Kom., M.M.S.I",
      matkul: "Sistem Informasi PJJ S1",
      date: "20-Desember-2023",
      statusLPPM: "pending",
      statusReview: "review",
    },
    {
      title: "Pelatihan Website SMK N 4 Payakumbuh",
      author: "Noviandri, S.Kom., M.M.S.I",
      matkul: "Teknik Informasi PJJ S1",
      date: "20-Desember-2023",
      statusLPPM: "not-yet",
      statusReview: "pending",
    },
    {
      title: "Pelatihan Flutter SMK N 4 Bandung",
      author: "Noviandri, S.Kom., M.M.S.I",
      matkul: "Teknik Informasi PJJ S1",
      date: "20-Desember-2023",
      statusLPPM: "approve",
      statusReview: "approve",
    },
    {
      title: "Pelatihan Komputer SMK N 4 Tasikmalaya",
      author: "Noviandri, S.Kom., M.M.S.I",
      matkul: "Teknik Informasi PJJ S1",
      date: "25-Desember-2023",
      statusLPPM: "not-yet",
      statusReview: "not-yet",
    },
    {
      title: "Pelatihan Komputer SMK N 4 Tasikmalaya",
      author: "Noviandri, S.Kom., M.M.S.I",
      matkul: "Teknik Informasi PJJ S1",
      date: "25-Desember-2023",
      statusLPPM: "not-yet",
      statusReview: "not-yet",
    },
    {
      title: "Pelatihan Komputer SMK N 4 Tasikmalaya",
      author: "Noviandri, S.Kom., M.M.S.I",
      matkul: "Teknik Informasi PJJ S1",
      date: "25-Desember-2023",
      statusLPPM: "not-yet",
      statusReview: "not-yet",
    },
    {
      title: "Pelatihan Komputer SMK N 4 Tasikmalaya",
      author: "Noviandri, S.Kom., M.M.S.I",
      matkul: "Teknik Informasi PJJ S1",
      date: "25-Desember-2023",
      statusLPPM: "not-yet",
      statusReview: "not-yet",
    },
    {
      title: "Pelatihan Komputer SMK N 4 Tasikmalaya",
      author: "Noviandri, S.Kom., M.M.S.I",
      matkul: "Teknik Informasi PJJ S1",
      date: "25-Desember-2023",
      statusLPPM: "not-yet",
      statusReview: "not-yet",
    },
    {
      title: "Pelatihan Komputer SMK N 4 Tasikmalaya",
      author: "Noviandri, S.Kom., M.M.S.I",
      matkul: "Teknik Informasi PJJ S1",
      date: "25-Desember-2023",
      statusLPPM: "not-yet",
      statusReview: "not-yet",
    },
    {
      title: "Pelatihan Komputer SMK N 4 Tasikmalaya",
      author: "Noviandri, S.Kom., M.M.S.I",
      matkul: "Teknik Informasi PJJ S1",
      date: "25-Desember-2023",
      statusLPPM: "not-yet",
      statusReview: "not-yet",
    },
  ];

  const dataPengabdian = [
    {
      title:
        "Pelatihan Website Cms Wordpress Menggunakan Elementor SMK N 4 Jakarta",
      author: "Noviandri, S.Kom., M.M.S.I",
      matkul: "Sistem Informasi PJJ S1",
      date: "20-Januari-2024",
      statusLPPM: "not-yet",
      statusReview: "approve",
    },
  ];
  return (
    <ProposalPage
      dataPenelitian={dataPenelitian}
      dataPengabdian={dataPengabdian}
    />
  );
}
