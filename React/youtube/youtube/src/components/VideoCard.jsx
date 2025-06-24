const VideoCard = ({ cardContent }) => {
  const { snippet, statistics } = cardContent;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="w-[300px] transform transition-all ease-in-out  duration-300 hover:scale-105 hover:shadow-[0_4px_10px_rgba(255,0,0,0.5)]">
      <img src={thumbnails.high.url} alt="thumbnail" className="rounded-lg" />
      <ul className="mt-2">
        <li className="font-bold text-sm text-zinc-400">{title}</li>
        <li className="text-zinc-200 text-sm">{channelTitle}</li>
        <li className="text-zinc-200 text-sm">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

// export const HigherOrderFunction = ({ cardContent }) => {
//   return (
//     <div className="border border-red-900 m-1 p-1">
//       <VideoCard cardContent={cardContent} />
//     </div>
//   );
// };
export default VideoCard;
