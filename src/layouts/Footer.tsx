import { Facebook, Instagram, Rss, Twitter, Youtube } from 'lucide-react';

import Image from '@/components/ui/Image';

export default function Footer() {
  return (
    <footer className='bg-[#2a3037] px-5 py-8 pb-16 text-gray-300'>
      <div className='container mx-auto'>
        <div className='mb-6'>
          <Image
            src='https://assets.moyoplan.com/image/footer/icon/moyo_brand_mobile.svg'
            alt='footer-logo'
            className='pb-6'
          />

          <div className='mb-6 grid w-full grid-cols-2 gap-x-5 gap-y-2.5 text-sm font-light text-[#dee2e6]'>
            <a href='#'>자주 묻는 질문</a>
            <a href='#'>가이드</a>
            <a href='#'>공지사항</a>
            <a href='#'>채용 안내</a>
            <a href='#'>애드링크</a>
          </div>
        </div>

        <div className='mb-4 flex flex-col gap-y-8'>
          <address className='flex flex-col gap-y-0.5 text-xs font-normal text-[#868e96]'>
            <p className='font-bold'>(주)모요</p>
            <p>
              <span>사업자등록번호 : 716-87-02405</span> | <span>대표 : 안동건</span>
            </p>
            <p>통신판매업 신고번호 : 2022-서울강남-04731</p>
            <p>주소 : 서울 서초구 강남대로 343 11층 (주)모요</p>
            <p>이메일 : help@moyoplan.com</p>
          </address>

          <div className='flex flex-col gap-y-0.5 text-xs font-normal text-[#868e96]'>
            <p className='font-bold'>고객센터</p>
            <p>카카오톡 : @모두의요금제</p>
            <p>전화번호 : 070-8287-0500</p>
            <p>
              *유선 문의량이 많아 카카오톡 채널 "모두의요금제" 검색 후 문의하시면 빠른 상담이
              가능합니다.
            </p>

            <p className='font-bold'>운영시간</p>
            <p>월~목 : 10:00 - 18:00</p>
            <p>금 : 10:00 - 17:00</p>
            <p>점심시간 : 12:00 - 13:30 (주말, 공휴일 제외)</p>
          </div>
        </div>

        <div className='mb-6 flex gap-4 text-xs text-[#868e96]'>
          <a href='#'>이용약관</a>
          <a href='#' className='text-[#dee2e6]'>
            개인정보처리방침
          </a>
          <a href='#'>정보보호현황</a>
        </div>

        <div className='flex gap-3'>
          <Youtube size={32} />
          <Instagram size={32} />
          <Facebook size={32} />
          <Twitter size={32} />
          <Rss size={32} />
        </div>
      </div>
    </footer>
  );
}
