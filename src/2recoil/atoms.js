import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// 사용자 정보 관리용 전역 상태
export const userState = atom({
  key: 'userState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

// 계정 이름 관리용 전역 상태
export const accountNameState = atom({
  key: 'accountNameState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
