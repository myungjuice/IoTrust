import React from 'react';

import { cn } from '@/lib/utils';

type Props = React.ComponentProps<'section'> & {
  bg?: string;
};

export default function Section({ bg = 'bg-white', children, className, ...props }: Props) {
  return (
    <section className={cn('px-5 py-6', bg, className)} {...props}>
      {children}
    </section>
  );
}
