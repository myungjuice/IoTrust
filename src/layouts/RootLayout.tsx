import { Outlet } from 'react-router-dom';

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
    </div>
  );
}
