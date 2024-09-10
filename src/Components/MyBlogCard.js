export const MyBlogCard = (props) => {
  const { image, title, tag, profile, username, date } = props;

  return (
    <div className='p-4 border border-gray-300 rounded-lg w-98 h-[478px]'>
      <div>
        <img
          className='h-60 w-full object-cover rounded-md mb-4'
          src={image}
          alt={image}
        />
      </div>
      <p className='text-sm leading-5 text-blue-500 bg-blue-100 px-2 py-1 rounded-md inline-block'>
        {tag}
      </p>
      <h2 className='text-2xl leading-7 font-semibold pt-4'>{title}</h2>

      <div>
        <div className='flex gap-5 text-gray-400 text-base pt-5'>
          <div className='flex gap-3'>
            <img className='h-9 w-9 rounded-full' src={profile} />
            <p>{username}</p>
          </div>
          <p className='text-sm leading-6 text-gray-500'>{date}</p>
        </div>
      </div>
    </div>
  );
};
