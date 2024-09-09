export const MyBlogCard = (props) => {
  const { image, title, tag, profile, username, date } = props;

  return (
    <div className="px-4 py-4 border border-solid rounded w-fit">
      <div>
        <img className="h-60 w-90 pb-4" src={image} alt={title} />
      </div>
      <div>
        <p className="text-sm flex justify-center text-blue-500 bg-blue-100 w-[86px] h-[28px] rounded-md">
          {tag}
        </p>
        <div>
          <img className="h-9 w-9" src={profile} />
          <p>{username}</p>
        </div>
        <h2 className="text-2xl">{title}</h2>
        <p>{date}</p>
      </div>
    </div>
  );
};
