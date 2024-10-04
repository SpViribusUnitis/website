import { client } from "@/sanity/lib/client";

//bez propsa za sve postove

type IUseGetPostProps = "događanja" | "novosti" | undefined;

export interface IPostPreview {
  title: string;
  slug: string;
  _createdAt: string;
  _id: string;
  previewText: string;
}

export const useGetPostsPreview = async (category?: IUseGetPostProps) => {
  const groqQuery = `*[_type == 'vijest' ${category ? `&& count((categories[]->slug.current)[@ in ["${category}"]]) > 0 ` : ""}]{
    title,'slug':slug.current,_createdAt,_id,previewText
  }`;

  const data = await client.fetch(groqQuery, [], {
    next: {
      revalidate: 120,
    },
  });

  return data as IPostPreview[];
};
