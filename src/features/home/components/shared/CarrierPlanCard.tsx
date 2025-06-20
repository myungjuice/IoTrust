import Image from '@/components/ui/Image';
import type { CarrierPlanCard } from '@/features/home/types/carrierPlan';

type Props = {
  career: CarrierPlanCard;
};

export default function CarrierPlanCard({ career }: Props) {
  return (
    <div className='keen-slider__slide min-w-[80%] rounded-xl border border-gray-100 bg-white'>
      <div className='flex flex-col gap-6 px-4 py-8'>
        <div className='flex flex-col gap-2'>
          <p className='text-sm text-[#868e96]'>{career.topTitle}</p>
          <div>
            <p className='text-lg font-bold'>{career.title}</p>
            <p className='text-sm text-[#868e96]'>{career.subTitle}</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 rounded-lg bg-gray-100 p-4'>
          {career.infoList.map(info => (
            <div key={`info-${info.id}`}>
              <div className='flex items-center gap-1'>
                <div className='h-4 w-4'>
                  <Image src={info.image} alt='info' />
                </div>
                <p className='text-sm text-[#3f4750]'>{info.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-end'>
          <div className='flex items-center gap-1'>
            <div className='rounded-lg bg-gray-100 px-2'>
              <span className='text-sm text-[#3f4750]'>평생</span>
            </div>
            <span className='text-lg font-bold text-[#516aec]'>
              {career.price.toLocaleString()}원
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
