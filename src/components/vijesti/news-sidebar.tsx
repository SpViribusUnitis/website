import { useGetLatestPosts } from "@/api/use-get-latest-posts";
import { formatDate } from "@/lib/utils";
import { LoaderCircleIcon } from "lucide-react";
import Link from "next/link";

export default async function NewsSidebar() {
  const data = await useGetLatestPosts();
  if (!data) {
    return (
      <div className="flex p-5 items-center justify-center">
        <LoaderCircleIcon className="animate-spin size-5" />
      </div>
    );
  }
  if (data.length === 0) {
    <div>
      <p>Nema zadnjih vijesti.</p>
    </div>;
  }
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Najnovije vijesti
      </h2>
      <ul className="space-y-6">
        {data.map((item) => {
          const { _id, title, previewText, slug, _createdAt } = item;
          return (
            <li
              key={_id}
              className="border-b border-gray-200 pb-4 last:border-b-0"
            >
              <Link href={`/vijesti/${slug}`} className="group block">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {formatDate(_createdAt)}
                </p>
                <p className="text-gray-600 mt-2 line-clamp-2">{previewText}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
