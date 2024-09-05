import { Facebook } from "@/Icons/Facebook";
import { Insta } from "@/Icons/Insta";
import { Linkedin } from "@/Icons/Linkedin";
import { Twitter } from "@/Icons/Twitter";

export const Footer = () => {
  return (
    <div className=" grid grid-cols-3">
      <div className="w-[280px] h-[160px]">
        <h1 className="text-lg font-semibold pb-4">About</h1>
        <p className="text-base font-normal pb-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="text-base font-semibold">
          <p>Email : info@jstemplate.net</p>
          <p>Phone : 880 123 456 789</p>
        </div>
      </div>
      <div className="flex flex-col justify-center text-start gap-2">
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="flex gap-5">
        <Facebook />
        <Twitter />
        <Insta />
        <Linkedin />
      </div>
      <div></div>
    </div>
  );
};
