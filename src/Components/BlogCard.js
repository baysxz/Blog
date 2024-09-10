export const BlogCard = (props) => {
  const { image, title, tag, username, date } = props;

  return (
    <div className='p-4 border border-gray-300 rounded-lg w-98 h-[478px]'>
      <div className='mb-4'>
        <img
          className='h-60 w-full object-cover rounded-md'
          src={image}
          alt={image}
        />
      </div>
      <div className='p-2'>
        <p className='text-sm leading-5 text-blue-500 bg-blue-100 px-2 py-1 rounded-md inline-block'>
          {tag}
        </p>
        <h2 className='text-2xl leading-7 font-semibold mb-5 mt-4'>{title}</h2>
        <p className='text-sm leading-6 text-gray-500'>{date}</p>
      </div>
    </div>
  );
};
