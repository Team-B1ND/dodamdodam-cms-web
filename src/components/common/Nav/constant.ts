import { BsPersonPlusFill } from "@react-icons/all-files/bs/BsPersonPlusFill";
import { FaPenAlt } from "@react-icons/all-files/fa/FaPenAlt";

export const NAV_ITEMS = [
  {
    icon: BsPersonPlusFill,
    title: "채용공고 대시보드",
    link: "/recruit",
    color: "#9763f6",
  },
  {
    icon: FaPenAlt,
    title: "채용공고 작성",
    link: "/recruitwrite",
    color: "#5dca87",
  },
] as const;
