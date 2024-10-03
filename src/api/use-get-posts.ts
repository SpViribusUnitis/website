import { client } from "@/sanity/lib/client";

//bez propsa za sve postove

type IUseGetPostProps = "dogadjanja" | "novosti";

export const useGetPosts = async (category?: IUseGetPostProps) => {
  const groqQuery = `*[_type == 'post' ${category ? `&& count((categories[]->slug.current)[@ in ["${category}"]]) > 0 ` : ""}]`;
  console.log(groqQuery);
  const data = await client.fetch(groqQuery, [], {
    next: {
      revalidate: 120,
    },
  });

  return data;
};
