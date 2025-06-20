import Image from '@/components/ui/Image';
import type { Ranking } from '@/features/home/types/ranking';

type Props = {
  ranking: Ranking;
};

export default function RankingCard({ ranking }: Props) {
  return (
    <div className='overflow-hidden rounded-xl border border-gray-100 shadow-sm'>
      <div className='flex h-24 items-center justify-center bg-[rgb(243_246_255/var(--tw-bg-opacity,1))] shadow-sm'>
        <Image src={ranking.image} alt={ranking.title} className='h-14 w-14' />
      </div>
      <div className='bg-white p-4'>
        <h3 className='font-bold'>{ranking.title}</h3>
        <p className='mt-1 text-sm font-medium text-[#868e96]'>{ranking.subtitle}</p>
      </div>
    </div>
  );
}
