const Skeleton = () => {
  return (
    <div className="rounded-md p-5  overflow-hidden shadow-md cursor-pointer w-[80%] xl:w-[100%] dark:bg-[#2b3743] ">
      <div
        src=""
        alt=""
        className="w-full bg-gray-500 object-cover h-[170px] animate-pulse"
      />
      <div className=" h-4 my-8 bg-gray-500 rounded-full animate-pulse"></div>
      <div className="mb-2 h-3 bg-gray-500 rounded-full animate-pulse"></div>
      <div className="mb-2 h-3 bg-gray-500 rounded-full animate-pulse"></div>
      <div className="mb-5 h-3 bg-gray-500 rounded-full animate-pulse"></div>
    </div>
  );
};

export default Skeleton;
