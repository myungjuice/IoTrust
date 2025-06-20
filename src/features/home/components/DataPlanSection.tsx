import Section from '@/components/shared/Section';
import Title from '@/components/shared/Title';

import { DATA_PLAN_LIST } from '../data/dataPlan';
import DataPlanCard from './shared/DataPlanCard';

export default function DataPlanSection() {
  return (
    <Section>
      <Title title='데이터 얼마나 필요하세요?' />

      <ul className='space-y-3'>
        {DATA_PLAN_LIST.map(function (plan) {
          return <DataPlanCard key={plan.id} plan={plan} />;
        })}
      </ul>
    </Section>
  );
}
