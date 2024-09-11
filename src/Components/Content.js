import { Back } from "@/Icons/Back";
import { Forward } from "@/Icons/Forward";
import moment from "moment";
import Link from "next/link";

export const Content = (props) => {
  const { image, title, date, tags, id } = props;
  return (
    <div className='hidden sm:block'>
      <Link href={`blog/${id}`}>
        <div className='relative flex justify-center pt-[100px]'>
          <img className='rounded-2xl w-[1216px] h-[600px]' src={image}></img>
          <div className=' w-[598px] h-[252px] bg-white absolute bottom-[13px] left-[11px] rounded-xl p-10'>
            <div className='w-[97px] h-[28px] font-normal text-sm text-white  bg-[#4B6BFB] rounded-md text-center place-content-center'>
              {tags[0]}
            </div>
            <div className='text-3xl text-slate-950 font-medium pt-4 pb-6'>
              {title}
            </div>
            <div className='text-base'>
              {moment(date).format("MMMM DD, YYYY")}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
