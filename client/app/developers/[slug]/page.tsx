import ScoreCard from '../../components/ScoreCard';
import { sampleGeneratedDeveloperData } from '../../sampleData';

// should apply TanStack Query for fetching
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const fetchUserByAccountId = async (id: string) => {
  const res = await fetch(`${apiUrl}/accounts/` + id);
  return res.json();
};

export default async function Page({ params }: { params: { slug: string } }) {
  const developerData = await fetchUserByAccountId(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24">
      <div>
        <ScoreCard
          developerData={
            developerData.name === 'feng yang' // for testing, should removed before formal released
              ? sampleGeneratedDeveloperData
              : developerData
          }
        />
      </div>
    </main>
  );
}
