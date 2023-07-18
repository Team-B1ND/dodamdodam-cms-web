import { atom } from "recoil";

export const recruitImageAtom = atom<string>({
  key: "recruitWrite/recruitImageAtom",
  default: "",
});

export const recruitPdfFileNameAtom = atom<string[]>({
  key: "recuritWrite/recruitPdfAtom",
  default: [],
});
