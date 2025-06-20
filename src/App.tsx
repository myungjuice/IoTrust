import '@/styles/global.css';

import { Suspense } from 'react';

import Routes from './app/Routes';

export default function App() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <Routes />
    </Suspense>
  );
}
