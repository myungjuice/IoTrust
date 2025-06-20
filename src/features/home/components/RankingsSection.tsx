import Section from '@/components/shared/Section';
import Title from '@/components/shared/Title';

import { RANKING_LIST } from '../data/ranking';
import RankingCard from './shared/RankingCard';

export default function RankingSection() {
  return (
    <Section>
      <Title title='모요 요금제 랭킹' />
      <div className='mt-4 grid grid-cols-2 gap-3'>
        {RANKING_LIST.map(ranking => (
          <RankingCard key={ranking.id} ranking={ranking} />
        ))}
      </div>
    </Section>
  );
}
