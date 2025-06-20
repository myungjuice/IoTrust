import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';

import Section from '@/components/shared/Section';
import Title from '@/components/shared/Title';

import { PROMOTION_LIST } from '../data/promotion';
import PromotionCard from './shared/PromotionCard';

export default function PromotionSection() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 'auto',
      spacing: 12,
    },
  });

  return (
    <Section>
      <Title title={['자급제 + 알뜰폰보다 싼 휴대폰', '특가 소식 놓치지 마세요.']} />
      <div ref={sliderRef} className='keen-slider mt-4'>
        {PROMOTION_LIST.map(promotion => (
          <PromotionCard key={promotion.id} promotion={promotion} />
        ))}
      </div>
    </Section>
  );
}
