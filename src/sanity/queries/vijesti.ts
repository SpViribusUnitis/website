import {groq} from 'next-sanity'

export const buildVijestQuery = (
  slug: string,
) => groq`*[_type == "vijest" && slug.current == '${slug}'][0]{ 
    title,
    slug,
    author,
    mainImage,
    publishedAt,
    body
  }`
export const vijestiPathsQuery = groq`*[_type == "vijest" && defined(slug.current)][]{
    "params": { "vijestId": slug.current }
  }`
