import { atom } from "recoil"; //객체(key, default를 가지고 있는)를 파라미터로 받는 함수
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const loginState = atom({
  key: "loginState",
  // default: false, // 빈객체로 줘도 되고, 여러개 지정해줘도 되고.
  default: {
    isLogin: false,
    userName: "",
  },
  effects_UNSTABLE: [persistAtom],
});
