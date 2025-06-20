import type { CarrierPlan } from '../types/carrierPlan';

export const CARRIER_PLAN_LIST: CarrierPlan[] = [
  {
    id: 1,
    bg: 'bg-[#f8f9fa]',
    topImage: 'https://assets.moyoplan.com/logo/mpo/14.svg',
    title: '110만명이 선택한 통신사',
    subTitle: '통신비 줄이고, 혜택 챙기는 똑똑한 선택',
    cardList: [
      {
        id: 1,
        topTitle: '[평생할인] 7GB+/통화기본',
        title: '월 7GB + 1Mbps',
        subTitle: '통화 무제한 | 문자 무제한',
        infoList: [
          {
            id: 1,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/naverpay.svg',
            text: '매달 쿠폰팩 5천원 혜택 (6만원)',
          },
          {
            id: 2,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/emart24.svg',
            text: '매월 이마트 24 5천원 (24개월 간 지급)',
          },
          {
            id: 3,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/etc.svg',
            text: '우리결합 추가 데이터 5GB',
          },
        ],
        price: 15900,
      },
      {
        id: 2,
        topTitle: '데이터 플러스 7GB(+10GB 추가 제공 프로모션)',
        title: '월 17GB + 1Mbps',
        subTitle: '통화 무제한 | 문자 무제한',
        infoList: [
          {
            id: 1,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/naverpay.svg',
            text: '매달 쿠폰팩 5천원 혜택 (6만원)',
          },
          {
            id: 2,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/etc.svg',
            text: '우리결합 추가 데이터 5GB',
          },
          {
            id: 3,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/etc.svg',
            text: '추가 데이터 10GB',
          },
        ],
        price: 17500,
      },
      {
        id: 3,
        topTitle: '[평생할인] 71GB+/통화기본',
        title: '월 11GB + 매일 2GB + 3Mbps',
        subTitle: '통화 무제한 | 문자 무제한',
        infoList: [
          {
            id: 1,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/naverpay.svg',
            text: '매달 쿠폰팩 5천원 혜택 (6만원)',
          },
          {
            id: 2,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/naverpay.svg',
            text: '매달 Npay 5천원 페이백(6만원)',
          },
          {
            id: 3,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/emart24.svg',
            text: '매월 이마트 24 5천원 (24개월 간 지급)',
          },
        ],
        price: 32990,
      },
    ],
  },
  {
    id: 2,
    bg: 'bg-gray-100',
    topImage: 'https://assets.moyoplan.com/logo/mpo/19.svg',
    title: 'KT 품질 실속형 알뜰통신사',
    subTitle: '할인에 혜택까지 더한 최적의 선택!',
    cardList: [
      {
        id: 1,
        topTitle: '모두 충분 7GB+(밀리의서재)',
        title: '월 7GB + 1Mbps',
        subTitle: '통화 무제한 | 문자 무제한',
        infoList: [
          {
            id: 1,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/millie.svg',
            text: '밀리의서재 구독권 평생 무료 제공',
          },
          {
            id: 2,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/point.svg',
            text: '기본 가입 3만원 혜택',
          },
          {
            id: 3,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/point.svg',
            text: '모요개통(셀프개통) 2만원 혜택',
          },
        ],
        price: 16200,
      },
      {
        id: 2,
        topTitle: '데이터 충분 15GB+/100분(CU)',
        title: '월 15GB + 3Mbps',
        subTitle: '통화 무제한 | 문자 무제한',
        infoList: [
          {
            id: 1,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/point.svg',
            text: '기본 가입 3만원 혜택',
          },
          {
            id: 2,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/point.svg',
            text: '모요개통(셀프개통) 2만원 혜택',
          },
          {
            id: 3,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/point.svg',
            text: '모요X스카이라이프 단독 2만원 혜택',
          },
        ],
        price: 25300,
      },
      {
        id: 3,
        topTitle: '모두 충분 100GB+(CU)',
        title: '월 100GB + 5Mbps',
        subTitle: '통화 무제한 | 문자 무제한',
        infoList: [
          {
            id: 1,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/point.svg',
            text: '기본 가입 3만원 혜택',
          },
          {
            id: 2,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/point.svg',
            text: '모요개통(셀프개통) 2만원 혜택',
          },
          {
            id: 3,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/point.svg',
            text: '모요X스카이라이프 단독 2만원 혜택',
          },
        ],
        price: 38200,
      },
    ],
  },

  {
    id: 3,
    bg: 'bg-gray-100',
    topImage: 'https://assets.moyoplan.com/logo/mpo/70.svg',
    title: '알뜰폰 가격에 KT 쓰세요',
    subTitle: '신청페이지에서 특별 프로모션 중!',
    cardList: [
      {
        id: 1,
        topTitle: '요고 40',
        title: '월 30GB + 1Mbps',
        subTitle: '통화 무제한 | 문자 무제한',
        infoList: [
          {
            id: 1,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/subscription.svg',
            text: 'KT VIP 멤버십',
          },
          {
            id: 2,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/tving.svg',
            text: '티빙 광고형 스탠다드 12개월 제공',
          },
          {
            id: 3,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/ticket.svg',
            text: '34세 이하 기본 데이터 2배 제공',
          },
        ],
        price: 40000,
      },
      {
        id: 1,
        topTitle: '요고 61',
        title: '월 무제한 +',
        subTitle: '통화 무제한 | 문자 무제한',
        infoList: [
          {
            id: 1,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/subscription.svg',
            text: 'KT VIP 멤버십',
          },
          {
            id: 2,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/tving.svg',
            text: 'OTT 혜택 택 1',
          },
          {
            id: 3,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/genie.svg',
            text: '콘텐츠 혜택 24개월 제공',
          },
        ],
        price: 61000,
      },
      {
        id: 1,
        topTitle: '요고 34',
        title: '월 15GB + 400Kbps',
        subTitle: '통화 무제한 | 문자 무제한',
        infoList: [
          {
            id: 1,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/tving.svg',
            text: '티빙 광고형 스탠다드 6개월 제공',
          },
          {
            id: 2,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/ticket.svg',
            text: '34세 이하 기본 데이터 2배 제공',
          },
          {
            id: 3,
            image: 'https://assets.moyoplan.com/image/mvno-gifts/badge/ticket.svg',
            text: '추가 데이터 5GB 제공',
          },
        ],
        price: 61000,
      },
    ],
  },
];
