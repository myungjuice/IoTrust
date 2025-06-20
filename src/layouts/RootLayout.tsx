import { Outlet } from 'react-router-dom';

import BottomNavigation from './BottomNavigation';
import Footer from './Footer';
import Header from './Header';

export default function RootLayout() {
  return (
    <div className='mx-auto h-full w-full max-w-[640px]'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}
