import { client } from "@/sanity/lib/client";

//bez propsa za sve postove

type IUseGetPostProps = "dogadjanja" | "novosti";
export interface IPostPreview {
  title: string;
  slug: string;
  _createdAt: string;
  _id: string;
  previewText: string;
}
export const useGetLatestPosts = async (
  category?: IUseGetPostProps,
  count = 3
) => {
  const groqQuery = `*[_type == 'vijest' ${category ? `&& count((categories[]->slug.current)[@ in ["${category}"]]) > 0 ` : ""}]{
    title,'slug':slug.current,_createdAt,_id,previewText
  } | order(_createdAt desc)[0..${count}]`;

  const data = await client.fetch(groqQuery, [], {
    next: {
      revalidate: 120,
    },
  });

  return data as IPostPreview[];
};
