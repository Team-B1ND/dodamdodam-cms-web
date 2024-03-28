import { atom } from "recoil";
import {
  PostRecruitParam,
  RecruitPdfParam,
} from "../../repositories/RecruitRepository/RecruitRepository";

export const recruitPdfAtom = atom<RecruitPdfParam[]>({
  key: "recruitPdfAtom",
  default: [],
});

export const imgUrlAtom = atom<string>({
  key: "imgUrlAtom",
  default: "",
});

export const ModifyRecrutAtom = atom<PostRecruitParam>({
  key: "ModifyRecrutAtom",
  default: {
    name: "",
    location: "",
    duty: "",
    etc: "",
    personnel: 0,
    image: "",
    pdfs: [] as RecruitPdfParam[],
  },
});
