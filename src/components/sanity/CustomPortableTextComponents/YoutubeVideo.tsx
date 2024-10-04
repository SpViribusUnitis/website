"use client";
import React from "react";
import getYouTubeId from "get-youtube-id";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
export const YoutubeVideo = ({
  videoData,
}: {
  videoData: { url: string; videoDesc?: string };
}) => {
  const { url, videoDesc } = videoData;
  return (
    <div className=" h-full  flex flex-col justify-center gap-[5px]">
      <div>
        <YtPreview url={url} />
      </div>
      {videoDesc && <p className="text-center text-sm">{videoDesc}</p>}
    </div>
  );
};
const YtPreview = (props: any) => {
  const { url, renderDefault } = props;
  if (!url) {
    return <div>Missing YouTube URL</div>;
  }
  const id = getYouTubeId(url);
  if (!id) {
    return <div>Missing YouTube id,something went wrong!!</div>;
  }
  return <LiteYouTubeEmbed title="" id={id} />;
};
