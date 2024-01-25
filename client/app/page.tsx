import Link from 'next/link';

const fetchAllUsers = async () => {
  const res = await fetch('http://localhost:8080/api/accounts');
  const data = res.json();
  return data;
};

export default async function Home() {
  const developersData = await fetchAllUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24">
      <div>
        {developersData.map(item => (
          <li key={item.id}>
            <Link href={`/developers/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </div>
    </main>
  );
}
