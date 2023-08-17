import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
          <Link href={`#`} className='px-[15px] py-[7px] relative group'>
            <span className=''>About</span>
            <div className='absolute w-full h-full inset-0  bg-white rounded-[30px] opacity-0 group-hover:opacity-20 scale-75 group-hover:scale-100 duration-500'></div>
          </Link>
          <Link href={`#`} className='px-[15px] py-[7px] relative group'>
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
