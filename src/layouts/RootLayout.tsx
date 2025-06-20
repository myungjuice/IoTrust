import { Outlet } from 'react-router-dom';

import BottomNavigation from './BottomNavigation';
import Footer from './Footer';
import Header from './Header';

export default function RootLayout() {
  return (
    <div className='mx-auto h-full w-full min-w-[320px] max-w-[640px]'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}
