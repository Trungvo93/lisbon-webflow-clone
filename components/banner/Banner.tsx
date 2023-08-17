import Image from "next/image";
import { Darker_Grotesque, Oxygen } from "next/font/google";
const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });
const oxyGen = Oxygen({ subsets: ["latin"], weight: "400" });

const Banner = () => {
  return (
    <div className='  pt-[70px] h-screen    '>
      {/* Paragraph */}
      <div className='my-12 z-30 absolute  left-1/2 -translate-x-1/2 bottom-[9%] flex items-center justify-center flex-col '>
        {/* Title */}
        <div
          className={`max-w-[710px] mb-[10px] font-semibold text-[120px] ${darkerGrotesque.className} text-center leading-none`}>
          The <span className='text-[#0fc] text-[120px]'>Inventive</span> tech
          gathering
        </div>

        {/* Content */}
        <div
          className={`max-w-[700px] my-[36px] text-[18px] text-center ${oxyGen.className} leading-tight	`}>
          Don’t miss out on this amazing opportunity and join us for the
          Entrepreneur, Technophile & Creative Collaboration event!
        </div>
        <button
          className={`bg-[#0fc] ${oxyGen.className}  px-[30px] py-[20px] text-black rounded-[17px] hover:bg-[#0fc]/80 duration-300 leading-[18.2px]`}>
          Book your Ticket
        </button>
        <div className='absolute inset-0 bg-black -z-10 opacity-70 blur-2xl'></div>
      </div>
      <div className='relative inset-0 h-full  overflow-hidden'>
        <div className=' h-full w-full animate-infinite'>
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
              className='absolute top-[20%] right-[5%]  w-auto object-cover'
            />
            <Image
              src='/assets/images/Hero Image 8.png'
              alt='Hero Image 8'
              width={130}
              height={0}
              priority
              className='absolute bottom-[4%]  right-[5%]  w-auto object-cover'
            />
            <Image
              src='/assets/images/Hero Image 5.png'
              alt='Hero Image 5'
              width={130}
              height={0}
              priority
              className='absolute bottom-[8%] left-[6%]  w-auto object-cover'
            />

            <Image
              src='/assets/images/Hero Image 7.png'
              alt='Hero Image 7'
              width={94}
              height={0}
              priority
              className='absolute bottom-[32%] left-[31%]  w-auto object-cover'
            />

            <Image
              src='/assets/images/Flower.svg'
              alt='Flower'
              width={109}
              height={0}
              priority
              className='absolute bottom-[26%] right-[20%]  w-auto object-cover'
            />

            <Image
              src='/assets/images/Hero Image 6.png'
              alt='Hero Image 6'
              width={192}
              height={0}
              priority
              className='absolute bottom-[0%] left-[26%]  w-auto object-cover'
            />
          </div>

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
              className='absolute top-[20%] right-[5%]  w-auto object-cover'
            />
            <Image
              src='/assets/images/Hero Image 8.png'
              alt='Hero Image 8'
              width={130}
              height={0}
              priority
              className='absolute bottom-[4%]  right-[5%]  w-auto object-cover'
            />
            <Image
              src='/assets/images/Hero Image 5.png'
              alt='Hero Image 5'
              width={130}
              height={0}
              priority
              className='absolute bottom-[8%] left-[6%]  w-auto object-cover'
            />

            <Image
              src='/assets/images/Hero Image 7.png'
              alt='Hero Image 7'
              width={94}
              height={0}
              priority
              className='absolute bottom-[32%] left-[31%]  w-auto object-cover'
            />

            <Image
              src='/assets/images/Flower.svg'
              alt='Flower'
              width={109}
              height={0}
              priority
              className='absolute bottom-[26%] right-[20%]  w-auto object-cover'
            />

            <Image
              src='/assets/images/Hero Image 6.png'
              alt='Hero Image 6'
              width={192}
              height={0}
              priority
              className='absolute bottom-[0%] left-[26%]  w-auto object-cover'
            />
          </div>
        </div>
        <div className='h-[20%]  z-10 absolute bottom-0 inset-x-0 bg-gradient-to-t from-black from-40% '></div>
      </div>
    </div>
  );
};

export default Banner;
