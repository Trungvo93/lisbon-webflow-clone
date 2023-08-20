"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
    // router.push(`/#${targetId}`);
  };
  return (
    <div className='flex justify-center h-[70px] bg-black  '>
      <div className='max-w-[1350px] w-full h-full flex justify-between items-center px-8 '>
        <Image
          src='/assets/images/Lisbon Brand Logo.svg'
          alt='Lisbon Logo'
          width={104}
          height={30}
        />
        <div className='flex justify-between items-center  font-medium gap-[10px]'>
          <Link
            href={`#trusted`}
            className='px-[15px] py-[7px] relative group '
            onClick={(e) => {
              handleScroll(e);
            }}>
            <span className=''>About</span>
            <div className='absolute w-full h-full inset-0  bg-white rounded-[30px] opacity-0 group-hover:opacity-20 scale-75 group-hover:scale-100 duration-500'></div>
          </Link>
          <Link href={`#banner`} className='px-[15px] py-[7px] relative group'>
            <span className=''>Speakers</span>
            <div className='absolute w-full h-full inset-0  bg-white rounded-[30px] opacity-0 group-hover:opacity-20 scale-75 group-hover:scale-100 duration-500'></div>
          </Link>
          <Link href={`#`} className='px-[15px] py-[7px] relative group'>
            <span className=''>Agenda</span>
            <div className='absolute w-full h-full inset-0  bg-white rounded-[30px] opacity-0 group-hover:opacity-20 scale-75 group-hover:scale-100 duration-500'></div>
          </Link>
          <Link href={`#`} className='px-[23px] py-[7px] relative group'>
            <Image
              src='/assets/images/Ticket Icon.svg'
              alt='Ticket Icon'
              width={20}
              height={0}
              className='object-cover'
            />
            <div className='absolute w-full h-full inset-0  bg-white rounded-[30px] opacity-0 group-hover:opacity-20 scale-75 group-hover:scale-100 duration-500'></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
