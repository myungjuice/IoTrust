import { ChevronRight } from 'lucide-react';

import type { DataPlan } from '@/features/home/types/dataPlan';

type Props = {
  plan: DataPlan;
};

export default function DataPlanCard({ plan }: Props) {
  return (
    <li key={plan.id}>
      <div className='flex items-center gap-3 rounded-xl border border-[#f1f3f5] p-4 pl-3 shadow-sm transition-shadow hover:shadow-md'>
        <div className='min-w-16 text-center'>
          <span className='text-xl font-bold text-[#7086fb]'>{plan.label}</span>
        </div>
        <div className='w-full space-y-0.5'>
          <p className='text-md font-semibold'>{plan.price.toLocaleString()}원</p>
          <div className='flex flex-wrap items-center gap-1'>
            <p className='text-sm text-gray-400'>{plan.description}</p>
            {plan.endsIn && (
              <div className='max-w-fit rounded-xl bg-[#fff5f5] px-2 py-1'>
                <p className='text-xs font-bold text-[#fa5252]'>혜택 종료 {plan.endsIn}</p>
              </div>
            )}
          </div>
        </div>
        <div className='w-6'>
          <ChevronRight className='h-6 w-6 text-gray-400' />
        </div>
      </div>
    </li>
  );
}
