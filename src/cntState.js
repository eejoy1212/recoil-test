import { atom } from "recoil";

//상태관리할 것을 전역으로 선언
export const cntState = atom({
  key: "cnt",
  default: 10,
});
