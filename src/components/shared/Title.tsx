import { cn } from '@/lib/utils';

type Props = {
  title: string | string[];
  subTitle?: string;
  className?: string;
};

export default function Title({ title, subTitle, className }: Props) {
  return (
    <div className={cn('mb-4 flex flex-col', className)}>
      <h2 className='text-xl font-bold text-black'>
        {Array.isArray(title) ? title.map((line, index) => <div key={index}>{line}</div>) : title}
      </h2>
      {subTitle && <p className='mt-1 text-base text-[#868e96]'>{subTitle}</p>}
    </div>
  );
}
