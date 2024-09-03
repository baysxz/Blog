import { TagButton } from "./TagButton";

export const TrendPosts = (props) => {
  const { coverImage, blogTags, title } = props;
  return (
    <div className='flex justify-center'>
      <div
        className='h-80 w-72 rounded-xl bg-center'
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: "500px 320px",
        }}>
        <div>
          <p className='text-sm text-white'>{blogTags[0]}</p>{" "}
          <p className='text-xl text-red-600'>{title}</p>
        </div>
      </div>
    </div>
  );
};

// export default TrendPosts;
