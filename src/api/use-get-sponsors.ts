import { client } from "@/sanity/lib/client";

//bez propsa za sve postove

export interface ISponzor {
  name: string;
  logo: string;
  url?: string;
  _id: string;
}

export const useGetSponzors = async () => {
  const groqQuery = `*[_type == 'sponzor' ]{name,logo,url,_id}`;

  const data = await client.fetch(groqQuery, [], {
    next: {
      revalidate: 120,
    },
  });

  return data as ISponzor[];
};
