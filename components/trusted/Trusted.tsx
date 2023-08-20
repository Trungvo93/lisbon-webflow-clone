import { Darker_Grotesque } from "next/font/google";
import Image from "next/image";
const darker = Darker_Grotesque({ subsets: ["latin"] });
const Trusted = () => {
  return (
    <div className='mt-[70px] ' id='trusted'>
      <div className='text-center'>
        <span
          className={`text-cyan-default ${darker.className} font-semibold text-[24px]`}>
          COLLABORATORS
        </span>
      </div>
      <div className='flex justify-center items-center gap-14 mt-3'>
        <Image
          src='assets/images/648c179d5ba5eec89600235c_Logo1.svg'
          alt='648c179d5ba5eec89600235c_Logo1'
          width={0}
          height={0}
          className='object-cover invert w-auto h-auto max-h-[35px]  max-w-[165px] px-[14px]	'
        />
        <Image
          src='assets/images/648c179d5ba5eec896002363_Logo2.svg'
          alt='648c179d5ba5eec896002363_Logo2'
          width={0}
          height={0}
          className='object-cover invert w-auto h-auto max-h-[35px]  max-w-[165px] px-[14px]	'
        />

        <Image
          src='assets/images/648c179d5ba5eec896002365_Logo3.svg'
          alt='648c179d5ba5eec896002365_Logo3'
          width={0}
          height={0}
          className='object-cover invert w-auto h-auto max-h-[35px]  max-w-[165px] px-[14px]	'
        />

        <Image
          src='assets/images/648c179d5ba5eec896002369_Logo4.svg'
          alt='648c179d5ba5eec896002369_Logo4'
          width={0}
          height={0}
          className='object-cover invert w-auto h-auto max-h-[35px]  max-w-[165px] px-[14px]	'
        />
      </div>
    </div>
  );
};

export default Trusted;
