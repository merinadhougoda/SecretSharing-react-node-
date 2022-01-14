import { atom } from "recoil";

export const timeState = atom({
  key: "timeState",
  default: "5 minutes",
});
