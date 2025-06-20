import Image from '@/components/ui/Image';
import type { Promotion } from '@/features/home/types/promotion';

type Props = {
  promotion: Promotion;
};

export default function PromotionCard({ promotion }: Props) {
  return (
    <div className='keen-slider__slide min-w-[80%] rounded-xl border border-gray-100 bg-white shadow-xl'>
      <div className='p-5 text-center'>
        <h3 className='text-lg font-bold'>{promotion.title}</h3>
        <p className='mt-1 text-sm text-[#7086fb]'>{promotion.subtitle}</p>
        <div className='my-6 flex h-40 items-center justify-center'>
          <Image src={promotion.image} alt={promotion.title} className='h-full' />
        </div>
        <button className='w-full rounded-lg bg-[#5278f7] py-3 text-sm text-white'>
          특가 알림 받기
        </button>
      </div>
    </div>
  );
}
