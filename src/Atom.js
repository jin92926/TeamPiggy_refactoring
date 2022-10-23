import { atom } from "recoil"; //객체(key, default를 가지고 있는)를 파라미터로 받는 함수
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const loginState = atom({
  key: "loginState",
  default: {
    isLogin: false,
    userName: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const createdObjAtom = atom({
  key: "createdObjAtom",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
