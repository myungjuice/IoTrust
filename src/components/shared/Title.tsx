import { cn } from '@/lib/utils';

type Props = {
  title: string;
  subTitle?: string;
  className?: string;
};

export default function Title({ title, subTitle, className }: Props) {
  return (
    <div className={cn('flex flex-col', className)}>
      <h2 className='text-xl font-bold text-black'>{title}</h2>
      {subTitle && <p className='mt-1 text-base text-[#868e96]'>{subTitle}</p>}
    </div>
  );
}
