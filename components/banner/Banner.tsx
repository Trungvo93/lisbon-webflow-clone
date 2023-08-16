import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className='container relative'>
        <Image
          src='/assets/images/Hero Image 3.png'
          alt='Hero Image 3'
          width={192}
          height={0}
          className='absolute top-[10%] left-[5%] h-auto w-auto'
        />
      </div>
    </div>
  );
};

export default Banner;
