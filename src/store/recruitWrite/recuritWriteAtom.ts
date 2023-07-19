import { atom } from "recoil";

export const recruitImageAtom = atom<string>({
  key: "recruitWrite/recruitImageAtom",
  default: "",
});

export const recruitPdfFileAtom = atom<{ url: string; name: string }[]>({
  key: "recuritWrite/recruitPdfFileAtom",
  default: [],
});
