import type { DataPlan } from '../types/dataPlan';

export const DATA_PLAN_LIST: DataPlan[] = [
  {
    id: 1,
    label: '7GB',
    price: 8000,
    description: '웹 서핑과 카톡만 한다면',
  },
  {
    id: 2,
    label: '15GB',
    price: 13000,
    description: '출퇴근길에 음악을 듣는다면',
  },
  {
    id: 3,
    label: '71GB',
    price: 20000,
    description: '매일 1시간 이상 영상을 본다면',
  },
  {
    id: 4,
    label: '100GB',
    price: 23100,
    description: '걱정 없이 맘껏 쓰고 싶다면',
  },
  {
    id: 5,
    label: '무제한',
    price: 19100,
    description: '당일 배송 유심 무료',
    endsIn: '10일 : 10시간 : 17분',
  },
];
