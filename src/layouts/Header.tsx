import Image from '@/components/ui/Image';

export default function Header() {
  return (
    <div className='flex h-16 items-center justify-start px-2'>
      <Image
        src='https://assets.moyoplan.com/logo/moyo-icon.svg'
        alt='logo'
        className='h-10 w-14 px-2'
      />
    </div>
  );
}
