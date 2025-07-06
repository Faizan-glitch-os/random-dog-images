const ImageSkeleton = () => {
  return (
    <ul className="mt-8 grid grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2 md:gap-2">
      <li className="size-96 bg-gray-400 animate-pulse duration-75 rounded-2xl"></li>
      <li className="size-96 bg-gray-400 animate-pulse duration-75 rounded-2xl"></li>
      <li className="size-96 bg-gray-400 animate-pulse duration-75 rounded-2xl"></li>
      <li className="size-96 bg-gray-400 animate-pulse duration-75 rounded-2xl"></li>
    </ul>
  );
};

export default ImageSkeleton;
