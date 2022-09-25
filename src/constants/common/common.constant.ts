import { FaChalkboard } from "@react-icons/all-files/fa/FaChalkboard";
import { FaPen } from "@react-icons/all-files/fa/FaPen";

export const NAV_ITEMS = [
  {
    icon: FaChalkboard,
    title: "대시보드",
    link: "/",
    color: "#ff5f5f",
  },
  {
    icon: FaPen,
    title: "작성",
    link: "/write",
    color: "#6695fe",
  },
] as const;
