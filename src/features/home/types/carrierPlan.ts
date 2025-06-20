type Info = {
  id: number;
  image: string;
  text: string;
};

export type CarrierPlanCard = {
  id: number;
  topTitle: string;
  title: string;
  subTitle: string;
  infoList: Info[];
  price: number;
};

export type CarrierPlan = {
  id: number;
  bg: string;
  topImage: string;
  title: string;
  subTitle: string;
  cardList: CarrierPlanCard[];
};
