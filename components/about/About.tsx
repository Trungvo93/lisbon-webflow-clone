import { Darker_Grotesque, Oxygen } from "next/font/google";
import Image from "next/image";
const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });
const oxyGen = Oxygen({ subsets: ["latin"], weight: "400" });

const About = () => {
  return (
    <div
      id='about'
      className='relative flex flex-col justify-center items-center h-80vh mt-[490px] max-w-[1350px] m-auto w-full'>
      {/* Content */}
      <div className={`max-w-[560px] w-full text-center  `}>
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
      <div className='absolute inset-0 w-full h-full'>
        <div className='w-[390px] h-[265px] absolute -top-[40%] left-1/2 -translate-x-1/2 rounded-xl overflow-hidden'>
          <Image
            src={"/assets/images/about_Person Presentation-p-500.webp"}
            alt='about_Person Presentation-p-500'
            fill
            sizes='100vw'
            className='object-cover w-auto h-auto'
          />
        </div>
        <div className='w-[285px] h-[190px] absolute -top-[10%] left-[2%]  rounded-xl overflow-hidden'>
          <Image
            src={"/assets/images/about_Person Presentation 3.webp"}
            alt='about_Person Presentation 3'
            fill
            sizes='100vw'
            className='object-cover w-auto h-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
