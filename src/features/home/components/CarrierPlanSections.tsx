import { useKeenSlider } from 'keen-slider/react';
import { ChevronRight } from 'lucide-react';

import Section from '@/components/shared/Section';
import Title from '@/components/shared/Title';
import { Button } from '@/components/ui/button';
import Image from '@/components/ui/Image';

import { CARRIER_PLAN_LIST } from '../data/carrierPlan';
import CarrierPlanCard from './shared/CarrierPlanCard';

export default function CarrierPlanSection() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 'auto',
      spacing: 12,
    },
  });

  return (
    <>
      {CARRIER_PLAN_LIST.map(career => (
        <Section bg={career.bg} key={`career-${career.id}`}>
          <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white'>
            <Image src={career.topImage} alt='top-logo' />
          </div>
          <Title title={career.title} subTitle={career.subTitle} />
          <div ref={sliderRef} className='keen-slider mt-4'>
            {career.cardList.map(career => (
              <CarrierPlanCard key={`card-${career.id}`} career={career} />
            ))}
          </div>
          <div className='mt-4 flex items-center justify-center'>
            <Button variant='ghost' className='flex items-center gap-1'>
              <span className='text-sm text-[#868e96]'>요금제 더보기</span>
              <ChevronRight className='h-4 w-4 text-[#868e96]' />
            </Button>
          </div>
        </Section>
      ))}
    </>
  );
}
