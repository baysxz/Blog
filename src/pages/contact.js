import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full flex flex-col gap-[69px] max-w-screen-xl mx-auto">
      <div className="w-[640px] mx-auto flex flex-col mb-[100px]">
        <div className="mb-[30px] flex flex-col gap-5 font-semibold text-4xl">
          <p> Contact Us </p>
          <p className="font-normal text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex gap-[50px]">
          <div className="p-4 border border-slate-200 rounded-xl gap-2.5">
            <p className="font-semibold text-2xl"> Address </p>
            <p className="font-normal text-lg e text-gray-500">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="p-4 border border-slate-200 rounded-xl gap-2.5">
            <p className="font-semibold text-2xl"> Contact </p>
            <p className="font-normal text-lg text-gray-500">
              313-332-8662 info@email.com{" "}
            </p>
          </div>
        </div>
        <div className="mt-[49px] pt-[29px] pr-[130px] pb-[26px] pl-[35px] flex flex-col gap-[24px] bg-gray-100">
          <p className="font-semibold text-lg">Leave a Message</p>
          <div className="flex gap-7">
            <input
              placeholder="Your Name"
              className="font-normal text-base text-gray-500 px-5 py-[5.5px] bg-white rounded-md"
            />
            <input
              placeholder="Your Email"
              className="font-normal text-base text-gray-500 px-5 py-[5.5px] bg-white rounded-md"
            />
          </div>
          <input
            placeholder="Subject"
            className="font-normal text-base text-gray-500 px-5 py-[5.5px] bg-white rounded-md"
          />
          <input
            placeholder="Write a message"
            className="pb-24 font-normal text-base text-gray-500 px-5 pt-[14px] bg-white rounded-md"
          />
          <Link href="/error">
            <button className="py-2.5 px-4 font-medium text-sm bg-blue-600 rounded-md text-white w-fit">
              Send Message
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
