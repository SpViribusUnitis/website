import React from "react";

const NovostiPage = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | undefined };
}) => {
  console.log(params, searchParams);
  return <div>NovostiPage</div>;
};

export default NovostiPage;
