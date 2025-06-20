import BannerSection from '@/features/home/components/BannerSection';
import DataPlanSection from '@/features/home/components/DataPlanSection';
import PromotionSection from '@/features/home/components/PromotionSection';
import RankingsSection from '@/features/home/components/RankingsSection';

export default function Home() {
  return (
    <div>
      <BannerSection />
      <DataPlanSection />
      <RankingsSection />
      <PromotionSection />
    </div>
  );
}
