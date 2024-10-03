import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  url: string;
}

const staticNews: NewsItem[] = [
  {
    id: "1",
    title: "Novo otkriće u svijetu znanosti",
    date: "2023-10-04",
    excerpt:
      "Znanstvenici su otkrili novu metodu za proizvodnju čiste energije koja bi mogla revolucionirati našu borbu protiv klimatskih promjena.",
    url: "/vijesti/novo-otkrice",
  },
  {
    id: "2",
    title: "Ekonomski rast premašio očekivanja",
    date: "2023-10-03",
    excerpt:
      "Najnoviji ekonomski pokazatelji ukazuju na snažan oporavak gospodarstva, s rastom BDP-a koji je nadmašio prognoze analitičara.",
    url: "/vijesti/ekonomski-rast",
  },
  {
    id: "3",
    title: "Umjetna inteligencija u zdravstvu",
    date: "2023-10-02",
    excerpt:
      "Nova AI tehnologija pokazuje obećavajuće rezultate u ranom otkrivanju bolesti, otvarajući nove mogućnosti za preventivnu medicinu.",
    url: "/vijesti/ai-u-zdravstvu",
  },
];

export default function NewsSidebar() {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Najnovije vijesti
      </h2>
      <ul className="space-y-6">
        {staticNews.map((item) => (
          <li
            key={item.id}
            className="border-b border-gray-200 pb-4 last:border-b-0"
          >
            <Link href={item.url} className="group block">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{item.date}</p>
              <p className="text-gray-600 mt-2 line-clamp-2">{item.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
