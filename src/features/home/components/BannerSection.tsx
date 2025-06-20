import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useRef, useState } from 'react';

import Image from '@/components/ui/Image';

import { BANNER_LIST } from '../data/banner';

export default function BannerSection() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      created() {
        setCurrentSlide(0);
        startAutoSlide();
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
        startAutoSlide();
      },
    },
    []
  );

  function startAutoSlide() {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(function () {
      instanceRef.current?.next();
    }, 4000);
  }

  useEffect(function cleanupOnUnmount() {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <section className='relative px-4 py-2 pb-5'>
      <div ref={sliderRef} className='keen-slider overflow-hidden rounded-2xl'>
        {BANNER_LIST.map(banner => {
          console.log(banner);
          return (
            <div key={banner.id} className='keen-slider__slide'>
              <Image
                src={banner.src}
                alt={banner.alt}
                className='w-full rounded-2xl object-cover'
              />
            </div>
          );
        })}
      </div>

      <div className='absolute bottom-10 right-10 space-x-0.5 rounded-full bg-black/30 px-2 py-1 text-xs font-medium text-gray-800 text-white backdrop-blur-sm'>
        <span>{currentSlide + 1}</span>
        <span>/</span>
        <span>{BANNER_LIST.length}</span>
      </div>
    </section>
  );
}
