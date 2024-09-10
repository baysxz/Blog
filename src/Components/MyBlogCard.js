export const MyBlogCard = (props) => {
  const { image, title, tag, profile, username, date } = props;

  return (
    <div className="px-4 py-4 border border-solid rounded w-fit">
      <div>
        <img className="h-60 w-90 pb-4" src={image} alt={title} />
      </div>
      <p className="text-sm flex justify-center text-blue-500 bg-blue-100 w-[86px] h-[28px] text-wrap rounded-md">
        {tag}
      </p>
      <h2 className="text-2xl pt-4">{title}</h2>

      <div>
        <div className="flex gap-5 text-gray-400 text-base pt-5">
          <div className="flex gap-3">
            <img className="h-9 w-9 rounded-full" src={profile} />
            <p>{username}</p>
          </div>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
