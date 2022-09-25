import { atom } from "recoil";

export const navFoldAtom = atom<boolean>({
  key: "common/navFoldAtom",
  default: false,
});

export const navCurrentTabAtom = atom<string>({
  key: "common/navCurrentTabAtom",
  default: "대시보드",
});
