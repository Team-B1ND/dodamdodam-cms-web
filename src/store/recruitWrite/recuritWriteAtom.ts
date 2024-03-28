import { atom } from "recoil";
import { RecruitPdfParam } from "../../repositories/RecruitRepository/RecruitRepository";

export const recruitPdfAtom = atom<RecruitPdfParam[]>({
  key: "recruitPdfAtom",
  default: [],
});

export const imgUrlAtom = atom<string>({
  key: "imgUrlAtom",
  default: "",
});
