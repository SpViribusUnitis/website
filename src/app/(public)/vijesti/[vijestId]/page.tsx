import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import NewsSidebar from "@/components/vijesti/news-sidebar";
import { client } from "@/sanity/lib/client";
import { buildVijestQuery, vijestiPathsQuery } from "@/sanity/queries/vijesti";

import imageUrlBuilder from "@sanity/image-url";
import { CustomPortableTextComponents } from "@/components/sanity/CustomPortableTextComponents/CustomPortableTextComponents";
import { PortableText } from "@portabletext/react";
import { DonacijaBanner } from "@/components/shared/donacija-banner";
import { ArticleTitleDate } from "@/components/vijesti/article-title-date";


const builder = imageUrlBuilder(client);
export async function generateMetadata({
  params,
}: {
  params: { vijestId: string };
}): Promise<Metadata> {
  const post = await client.fetch(buildVijestQuery(params.vijestId), [], {
    next: { revalidate: 120 },
  });

  if (!post) {
    return {};
  }
  const buildImage = builder.image(post.mainImage).width(400).height(400).url();
  return {
    title: post.title,
    description: post.previewText.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.previewText.substring(0, 160),
      url: `/vijesti/${post.slug.current}`,
      siteName: "Braniteljska Zadruga Viribus Unitis",
      images: [{ url: buildImage, width: 400, height: 400 }],
      type: "website",
      locale: "en-US",
    },
  };
}
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(vijestiPathsQuery, [], {
    next: {
      revalidate: 120,
    },
  });
  const mappedPosts = posts.map((item: { params: { vijestId: string } }) => ({
    vijestId: item.params.vijestId,
  }));

  return mappedPosts;
}
export default async function BlogPost({
  params,
}: {
  params: { vijestId: string };
}) {
  /*  const post = await getBlogPost(params.slug); */

  const vijestData = await client.fetch(buildVijestQuery(params.vijestId), [], {
    next: { revalidate: 120 },
  });

  if (!vijestData) {
    notFound();
  }
  const { title, mainImage, author, publishedAt, body } = vijestData;
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <main className="md:w-2/3">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={builder.image(mainImage).width(800).height(400).url()}
              alt={title}
              width={800}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              <ArticleTitleDate publishedAt={publishedAt} />
            
              <div>
                <PortableText
                  value={body}
                  components={CustomPortableTextComponents}
                />
              </div>
            </div>
          </article>
        </main>
        <NewsSidebar />
      </div>
      <DonacijaBanner />
    </div>
  );
}
