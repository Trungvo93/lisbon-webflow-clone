import Image from "next/image";

const Banner = () => {
  return (
    <div className=' bg-yellow-300 pt-[70px] overflow-hidden     '>
      <div className='z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div>The Inventive tech gathering</div>
        <div>
          Don’t miss out on this amazing opportunity and join us for the
          Entrepreneur, Technophile & Creative Collaboration event!
        </div>
        <button>Book your Ticket</button>
      </div>
      <div className='relative     '>
        <div className='h-screen '>
          <Image
            src='/assets/images/Hero Image 3.png'
            alt='Hero Image 3'
            width={192}
            height={0}
            className='absolute top-[10%] left-[5%]  w-auto h-auto object-cover'
          />
          <Image
            src='/assets/images/Hero Image 2.png'
            alt='Hero Image 2'
            width={205}
            height={0}
            className='absolute top-[20%] right-[5%]  w-auto object-cover'
          />
          <Image
            src='/assets/images/Hero Image 8.png'
            alt='Hero Image 8'
            width={130}
            height={0}
            className='absolute bottom-[4%]  right-[5%]  w-auto object-cover'
          />
          <Image
            src='/assets/images/Hero Image 5.png'
            alt='Hero Image 5'
            width={130}
            height={0}
            className='absolute bottom-[8%] left-[6%]  w-auto object-cover'
          />

          <Image
            src='/assets/images/Hero Image 7.png'
            alt='Hero Image 7'
            width={94}
            height={0}
            className='absolute bottom-[32%] left-[31%]  w-auto object-cover'
          />

          <Image
            src='/assets/images/Flower.svg'
            alt='Flower'
            width={109}
            height={0}
            className='absolute bottom-[26%] right-[20%]  w-auto object-cover'
          />

          <Image
            src='/assets/images/Hero Image 6.png'
            alt='Hero Image 6'
            width={192}
            height={0}
            className='absolute bottom-[0%] left-[26%]  w-auto object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
