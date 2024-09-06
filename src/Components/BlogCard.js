export const BlogCard = (props) => {
  const { image, title, tag, date } = props;

  return (
    <div>
      <div className="px-4 py-2 border border-solid rounded w-fit">
        <div>
          <img className="h-60 w-90" src={image} alt={title} />
        </div>
        <div>
          <p>{tag}</p>
          <h2 className="text-2xl">{title}</h2>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
