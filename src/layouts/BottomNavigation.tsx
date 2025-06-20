import { Home, Search, Smartphone, User, Wifi } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { cn } from '@/lib/utils';

type NavItem = {
  href: string;
  label: string;
  Icon: React.ElementType;
  notification?: boolean;
};

const navItems: NavItem[] = [
  { href: '/', label: '홈', Icon: Home },
  { href: '/plan', label: '요금제 찾기', Icon: Search },
  { href: '/device', label: '휴대폰 찾기', Icon: Smartphone, notification: true },
  { href: '/internet', label: '인터넷 찾기', Icon: Wifi },
  { href: '/me', label: '마이페이지', Icon: User },
];

export default function BottomNavigation() {
  const { pathname } = useLocation();

  return (
    <nav className='fixed bottom-0 left-0 right-0 z-10 h-[50px] w-full bg-white'>
      <ul className='m-0 mx-auto flex h-full w-full min-w-[320px] max-w-[640px] list-none items-center justify-evenly p-0'>
        {navItems.map(({ href, label, Icon, notification }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                to={href}
                className={cn(
                  'flex flex-col items-center justify-center gap-1 text-[10px]',
                  isActive ? 'text-black' : 'text-gray-400'
                )}
              >
                <div className='relative'>
                  <Icon size={24} className={cn(isActive && 'fill-black')} />
                  {notification && (
                    <span className='absolute -right-1 -top-0.5 block h-1.5 w-1.5 rounded-full bg-red-500' />
                  )}
                </div>
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
