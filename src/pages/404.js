import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex py-[100px] justify-center content-center">
      <p className="text-7xl justify-center content-center pr-[60px] border-r border-gray-400">
        404
      </p>
      <div className="flex flex-col gap-5 pl-[60px]">
        <p className="text-2xl font-semibold">Page not found</p>

        <p className="w-[392px] text-lg text-gray-500 text-wrap">
          Were sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <Link href="/">
          <p className="text-sm w-[130px] h-10 text-white bg-blue-600 flex justify-center content-center py-[10px] px-4 rounded-md">
            Back to home
          </p>
        </Link>
      </div>
    </div>
  );
}
