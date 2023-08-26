import { Darker_Grotesque, Oxygen } from "next/font/google";
import Image from "next/image";
const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });
const oxyGen = Oxygen({ subsets: ["latin"], weight: "400" });

const About = () => {
  return (
    <div
      id='about'
      className=' h-full mt-[490px] max-w-[1350px] m-auto w-full relative flex flex-col items-center justify-center pb-[385px]  '>
      {/* Content */}
      <div className={`max-w-[560px] w-full h-full text-center   `}>
        <div
          className={`${darkerGrotesque.className} text-[94px] font-semibold leading-none mb-[32px]	`}>
          Where Ideas are Born
        </div>
        <div
          className={`${oxyGen.className} leading-[1.3]	text-[18px] tracking-[0.7px] mb-[10px]`}>
          Through our solution driven approach We are focused in bringing new
          ideas to live.Paving the road towards successful technological
          transformation is what we love doing.
        </div>
      </div>
      {/* Behind Background */}
      <div className='w-[390px] h-[265px] rounded-xl overflow-hidden absolute -top-[52%] left-[35%] '>
        <Image
          src={"/assets/images/about_Person Presentation-p-500.webp"}
          alt='about_Person Presentation-p-500'
          width={390}
          height={265}
          className='object-cover w-auto h-auto'
        />
      </div>
      <div className='w-[285px] h-[190px] absolute -top-[28%] left-[2%]  rounded-xl overflow-hidden'>
        <Image
          src={"/assets/images/about_Person Presentation 3.webp"}
          alt='about_Person Presentation 3'
          width={285}
          height={190}
          className='object-cover w-auto h-auto'
        />
      </div>
      <div className='w-[320px] h-[215px] absolute -top-[22%] right-[3%]  rounded-xl overflow-hidden'>
        <Image
          src={"/assets/images/about_Person Presentation 2-p-500.webp"}
          alt='about_Person Presentation 2-p-500'
          width={320}
          height={215}
          className='object-cover w-auto h-auto'
        />
      </div>
      <div className='w-[405px] h-[220px] absolute top-[22%] -left-[2%]  rounded-xl overflow-hidden'>
        <Image
          src={"/assets/images/about_Person Presentation 5-p-500.webp"}
          alt='about_Person Presentation 5-p-500'
          width={405}
          height={220}
          className='object-cover w-auto h-auto'
        />
      </div>

      <div className='w-[228px] h-[175px] absolute top-[35%] -right-[2%]  rounded-xl overflow-hidden'>
        <Image
          src={"/assets/images/about_Person Presentation 4-p-500.webp"}
          alt='about_Person Presentation 4-p-500'
          width={228}
          height={175}
          className='object-cover w-auto h-auto'
        />
      </div>

      <div className='w-[390px] h-[265px] absolute top-[55%] right-[20%]  rounded-xl overflow-hidden'>
        <Image
          src={"/assets/images/about_Person Presentation 7-p-500.png"}
          alt='about_Person Presentation 7-p-500'
          width={390}
          height={265}
          className='object-cover w-auto h-auto'
        />
      </div>
    </div>
  );
};

export default About;
