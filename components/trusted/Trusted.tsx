"use client";
import { useState, useEffect } from "react";
import { Darker_Grotesque } from "next/font/google";
import Image from "next/image";
import isInViewport from "@/lib/isInViewport";
const darker = Darker_Grotesque({ subsets: ["latin"] });
const Trusted = () => {
  const [isViewportTitle, setIsViewportTitle] = useState<boolean>(false);
  const [isViewportLogo1, setIsViewportLogo1] = useState<boolean>(false);
  const [isViewportLogo2, setIsViewportLogo2] = useState<boolean>(false);
  const [isViewportLogo3, setIsViewportLogo3] = useState<boolean>(false);
  const [isViewportLogo4, setIsViewportLogo4] = useState<boolean>(false);
  const [firstLoadAnimation, setFirstLoadAnimation] = useState<boolean>(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setIsViewportLogo1(isInViewport(document.getElementById("trustedLogo1")));
      setIsViewportLogo2(isInViewport(document.getElementById("trustedLogo2")));
      setIsViewportLogo3(isInViewport(document.getElementById("trustedLogo3")));
      setIsViewportLogo4(isInViewport(document.getElementById("trustedLogo4")));
      setIsViewportTitle(isInViewport(document.getElementById("trustedTitle")));
    });
  });
  useEffect(() => {
    setFirstLoadAnimation(true);
  }, []);
  return (
    <div className='mt-[70px] ' id='trusted'>
      <div
        className={`text-center  ${isViewportTitle ? "animate-move_up" : ""}  ${
          firstLoadAnimation ? "" : "animate-move_up"
        }`}
        id='trustedTitle'>
        <span
          className={`text-cyan-default ${darker.className} font-semibold text-[24px]`}>
          COLLABORATORS
        </span>
      </div>
      <div
        id='trustedLogo'
        className={`h-[35px] grid grid-cols-2 tablet:flex place-items-center justify-items-center gap-8 justify-center items-center laptop:gap-14 tablet:gap-10  mt-3`}>
        <Image
          id='trustedLogo1'
          src='assets/images/648c179d5ba5eec89600235c_Logo1.svg'
          alt='648c179d5ba5eec89600235c_Logo1'
          width={0}
          height={0}
          className={`${isViewportLogo1 ? "animate-zoom_in" : ""}  ${
            firstLoadAnimation ? "" : "animate-zoom_in"
          }  object-contain   invert w-full h-full  max-h-[35px]  max-w-[165px] mx-[14px]	`}
        />
        <Image
          id='trustedLogo2'
          src='assets/images/648c179d5ba5eec896002363_Logo2.svg'
          alt='648c179d5ba5eec896002363_Logo2'
          width={0}
          height={0}
          className={`${isViewportLogo2 ? "animate-zoom_in" : ""}  ${
            firstLoadAnimation ? "" : "animate-zoom_in"
          } object-contain   invert w-full h-full  max-h-[35px]  max-w-[165px] mx-[14px]	`}
        />

        <Image
          id='trustedLogo3'
          src='assets/images/648c179d5ba5eec896002365_Logo3.svg'
          alt='648c179d5ba5eec896002365_Logo3'
          width={0}
          height={0}
          className={`${isViewportLogo3 ? "animate-zoom_in" : ""}  ${
            firstLoadAnimation ? "" : "animate-zoom_in"
          } object-contain   invert w-full h-full  max-h-[35px]  max-w-[165px] mx-[14px]	`}
        />

        <Image
          id='trustedLogo4'
          src='assets/images/648c179d5ba5eec896002369_Logo4.svg'
          alt='648c179d5ba5eec896002369_Logo4'
          width={0}
          height={0}
          className={`${isViewportLogo4 ? "animate-zoom_in" : ""}  ${
            firstLoadAnimation ? "" : "animate-zoom_in"
          } object-contain   invert w-full h-full  max-h-[35px]  max-w-[165px] mx-[14px]	`}
        />
      </div>
    </div>
  );
};

export default Trusted;
