"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { Darker_Grotesque, Oxygen } from "next/font/google";
import isInViewport from "@/lib/isInViewport";
const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });
const oxyGen = Oxygen({ subsets: ["latin"], weight: "400" });
const Banner = () => {
  // const uuid = uuidv4();
  const [uuid, setUuid] = useState<string | null>(null);
  const [firstLoadAnimation, setFirstLoadAnimation] = useState<boolean>(false);
  const [isViewportTitle, setIsViewportTitle] = useState<boolean>(false);
  const [isViewportContent, setIsViewportContent] = useState<boolean>(false);
  const [heightScreen, setHeightScreen] = useState<number>(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsViewportTitle(
        isInViewport(document.getElementById(uuid + "bannerTitle"))
      );
      setIsViewportContent(
        isInViewport(document.getElementById(uuid + "bannerContent"))
      );
    });
  });
  useEffect(() => {
    setHeightScreen(window.screen.availHeight);
    setUuid(uuidv4());
    setTimeout(() => {
      setFirstLoadAnimation(true);
    }, 1000);
  }, []);
  return (
    <div
      className={`  pt-[70px] ${
        heightScreen == 0 ? "h-screen" : `h-[${heightScreen - 70}px]`
      }   relative w-full    `}
      id='banner'>
      {/* Paragraph */}
      <div className='mb-12    w-full h-full    flex items-center justify-center flex-col '>
        {/* Title */}
        <div
          className={`max-w-[710px] relative z-10 mb-[10px] font-semibold text-[120px] ${
            darkerGrotesque.className
          } text-center leading-none  ${
            isViewportTitle ? "animate-zoom_out" : ""
          }  ${firstLoadAnimation ? "" : "animate-zoom_out"}`}
          id={`${uuid}bannerTitle`}>
          <h1>
            The <span className='text-[#0fc] text-[120px]'>Inventive</span> tech
            gathering
          </h1>
          <div className='absolute inset-0 bg-black -z-10 opacity-70 blur-2xl'></div>
        </div>
        {/* Content */}
        <div
          id={`${uuid}bannerContent`}
          className={`relative z-10 ${
            isViewportContent ? "animate-move_up" : ""
          }  ${firstLoadAnimation ? "" : "animate-move_up"}`}>
          <div
            className={`max-w-[700px] my-[36px] text-[18px] text-center ${oxyGen.className} leading-tight	`}>
            Don’t miss out on this amazing opportunity and join us for the
            Entrepreneur, Technophile & Creative Collaboration event!
          </div>
          <div className='flex justify-center items-center'>
            <button
              className={`bg-[#0fc] ${oxyGen.className}  px-[30px] py-[20px] text-black rounded-[17px] hover:bg-[#0fc]/80 duration-300 leading-[18.2px]`}>
              Book your Ticket
            </button>
          </div>

          <div className='absolute inset-0 bg-black -z-10 opacity-70 blur-2xl'></div>
        </div>
      </div>
      {/* Background Animate */}
      <div className='absolute inset-0  overflow-hidden'>
        <div className=' h-full  w-full animate-infinite '>
          <div className='relative w-full h-full'>
            <Image
              src='/assets/images/Hero Image 3.png'
              alt='Hero Image 3'
              width={192}
              height={0}
              priority
              className='absolute top-[10%] left-[5%]  w-auto h-auto object-cover'
            />
            <Image
              src='/assets/images/Hero Image 2.png'
              alt='Hero Image 2'
              width={205}
              height={0}
              priority
              className='absolute top-[20%] right-[5%]  w-auto h-auto object-cover'
            />
            <Image
              src='/assets/images/Hero Image 8.png'
              alt='Hero Image 8'
              width={130}
              height={0}
              priority
              className='absolute bottom-[4%]  right-[5%]  w-auto h-auto object-cover'
            />
            <Image
              src='/assets/images/Hero Image 5.png'
              alt='Hero Image 5'
              width={130}
              height={0}
              priority
              className='absolute bottom-[8%] left-[6%] h-auto w-auto object-cover'
            />

            <Image
              src='/assets/images/Hero Image 7.png'
              alt='Hero Image 7'
              width={94}
              height={0}
              priority
              className='absolute bottom-[32%] left-[31%] h-auto w-auto  object-cover'
            />

            <Image
              src='/assets/images/Flower.svg'
              alt='Flower'
              width={109}
              height={0}
              priority
              className='absolute bottom-[26%] right-[20%] h-auto w-auto object-cover'
            />

            <Image
              src='/assets/images/Hero Image 6.png'
              alt='Hero Image 6'
              width={192}
              height={0}
              priority
              className='absolute bottom-[0%] left-[26%] h-auto w-auto object-cover'
            />
          </div>

          <div className='relative w-full h-full'>
            <Image
              src='/assets/images/Hero Image 3.png'
              alt='Hero Image 3'
              width={192}
              height={0}
              priority
              className='absolute top-[10%] left-[5%] h-auto  w-auto  object-cover'
            />
            <Image
              src='/assets/images/Hero Image 2.png'
              alt='Hero Image 2'
              width={205}
              height={0}
              priority
              className='absolute top-[20%] right-[5%] h-auto w-auto object-cover'
            />
            <Image
              src='/assets/images/Hero Image 8.png'
              alt='Hero Image 8'
              width={130}
              height={0}
              priority
              className='absolute bottom-[4%]  right-[5%]  w-auto h-auto object-cover'
            />
            <Image
              src='/assets/images/Hero Image 5.png'
              alt='Hero Image 5'
              width={130}
              height={0}
              priority
              className='absolute bottom-[8%] left-[6%] h-auto w-auto object-cover'
            />

            <Image
              src='/assets/images/Hero Image 7.png'
              alt='Hero Image 7'
              width={94}
              height={0}
              priority
              className='absolute bottom-[32%] left-[31%]  w-auto h-auto object-cover'
            />

            <Image
              src='/assets/images/Flower.svg'
              alt='Flower'
              width={109}
              height={0}
              priority
              className='absolute bottom-[26%] right-[20%] h-auto w-auto object-cover'
            />

            <Image
              src='/assets/images/Hero Image 6.png'
              alt='Hero Image 6'
              width={192}
              height={0}
              priority
              className='absolute bottom-[0%] left-[26%] h-auto w-auto object-cover'
            />
          </div>
        </div>
        <div className='h-1/5  z-10 absolute bottom-0 inset-x-0 bg-gradient-to-t from-black from-40% '></div>
      </div>
    </div>
  );
};

export default Banner;
