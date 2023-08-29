"use client";
import scrollElementToView from "@/lib/scrollElementToView";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [countClickOutside, setCountClickOutside] = useState<number>(0);
  useEffect(() => {
    const hideNavMobile = (e: MouseEvent) => {
      if (!document.getElementById("mobileNav")?.contains(e.target as Node)) {
        if (countClickOutside < 1) {
          setCountClickOutside(countClickOutside + 1);
        } else {
          setShowMobileNav(false);
          setCountClickOutside(0);
        }
      }
    };
    window?.addEventListener("click", hideNavMobile);
    return () => {
      window?.removeEventListener("click", hideNavMobile);
    };
  });
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    scrollElementToView(targetId);
  };
  const handleShowNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div>
      <div
        className={` fixed top-0 w-full z-50 flex justify-center h-[70px] bg-black animate-opacity`}>
        <div className='max-w-[1350px] w-full h-full flex justify-between items-center px-8'>
          <Image
            src='/assets/images/Lisbon Brand Logo.svg'
            alt='Lisbon Logo'
            width={104}
            height={30}
          />
          <div className=' flex justify-between items-center  font-medium gap-[10px] '>
            <Link
              href={`#about`}
              className='px-[15px] py-[7px] relative group laptop:block hidden '
              onClick={(e) => {
                handleScroll(e);
              }}>
              <span className=''>About</span>
              <div className='absolute w-full h-full inset-0  bg-white rounded-[30px] opacity-0 group-hover:opacity-20 scale-75 group-hover:scale-100 duration-500'></div>
            </Link>
            <Link
              href={`#banner`}
              className='px-[15px] py-[7px] relative group laptop:block hidden'
              onClick={(e) => {
                handleScroll(e);
              }}>
              <span className=''>Speakers</span>
              <div className='absolute w-full h-full inset-0  bg-white rounded-[30px] opacity-0 group-hover:opacity-20 scale-75 group-hover:scale-100 duration-500'></div>
            </Link>
            <Link
              href={`#`}
              className='px-[15px] py-[7px] relative group laptop:block hidden'>
              <span className=''>Agenda</span>
              <div className='absolute w-full h-full inset-0  bg-white rounded-[30px] opacity-0 group-hover:opacity-20 scale-75 group-hover:scale-100 duration-500'></div>
            </Link>
            <Link href={`#`} className='px-[23px] py-[7px] relative group '>
              <Image
                src='/assets/images/Ticket Icon.svg'
                alt='Ticket Icon'
                width={20}
                height={0}
                className='object-cover'
              />
              <div className='absolute w-full h-full inset-0  bg-white rounded-[30px] opacity-0 group-hover:opacity-20 scale-75 group-hover:scale-100 duration-500'></div>
            </Link>
            <button
              onClick={() => {
                handleShowNav();
              }}
              className='bg-white w-[42px] h-[42px] me-4 rounded-xl flex justify-center items-center '>
              <Image
                src='assets/images/menu-icon.svg'
                alt='menu icon'
                width={22}
                height={14}
                className='object-cover '
              />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        id='mobileNav'
        className={` fixed left-0 right-0 z-30  ${
          showMobileNav ? "top-[70px] " : "-top-[300px]  "
        } bg-black  border-white border-b-2  py-5 duration-700 `}>
        <Link
          href={`#about`}
          className='px-12 py-[14px] relative group block'
          onClick={(e) => {
            handleScroll(e);
          }}>
          <span className=' font-medium text-xl text-cyan-default'>About</span>
          <div className='absolute w-full h-full inset-0  bg-white  opacity-0 group-hover:opacity-20 scale-75 group-hover:scale-100 duration-500'></div>
        </Link>
        <Link
          href={`#banner`}
          className='px-12 py-[14px] relative group block'
          onClick={(e) => {
            handleScroll(e);
          }}>
          <span className=' font-medium text-xl text-cyan-default'>
            Speakers
          </span>
          <div className='absolute w-full h-full inset-0  bg-white  opacity-0 group-hover:opacity-20 scale-75 group-hover:scale-100 duration-500'></div>
        </Link>
        <Link href={`#`} className='px-12 py-[14px] relative group block'>
          <span className=' font-medium text-xl text-cyan-default'>Agenda</span>
          <div className='absolute w-full h-full inset-0  bg-white  opacity-0 group-hover:opacity-20 scale-75 group-hover:scale-100 duration-500'></div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
