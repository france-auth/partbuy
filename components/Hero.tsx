import Image from "next/image";
import MailSvg from "./svgcomponent/MailSvg";
import CallSvg from "./svgcomponent/CallSvg";
import Button from "./Button";

const Hero = () => {
  return (
    <main className="h-screen bg-[url(/hero.png)] sm:bg-[url(/hero-desktop.png)] bg-cover bg-center bg-no-repeat lg:bg-cover -z-50 w-screen">
      <div className="h-screen mx-auto w-full space-y-3">
        <div className="px-5 w-full flex justify-evenly border-b border-b-[#eeeeee]">
          <div className="w-full flex justify-center items-center px-4 py-3 hover:bg-[#00FAEB] text-[#eeeeee] hover:text-[#131313]">
            <MailSvg 
              width={20} 
              height={20} 
              className="" 
            />
          </div>
          <div className="w-full flex justify-center items-center px-4 py-2 hover:bg-[#00FAEB] text-[#eeeeee] hover:text-[#131313]">
            <CallSvg 
              width={20} 
              height={20} 
              className="" 
            />
          </div>
          <div className="w-full flex justify-center items-center px-4 py-2 hover:bg-[#00FAEB] text-[#eeeeee] hover:text-[#131313]">
            <CallSvg 
              width={20} 
              height={20} 
              className="" 
            />
          </div>
        </div>
        <div className='w-full flex justify-around items-center'>
          <Image 
            src={'/hamburger.svg'} 
            alt="hamburger menu" 
            width={20} 
            height={20}
            quality={100}
            />
          <div className="flex justify-center items-center gap-3">
            <Image 
              src={'/mobilelogo.svg'} 
              alt="logo" 
              width={30} 
              height={30}
              quality={100}
              className="w-full"
            />
            <h1 className='text-[10px] font-light text-[#eeeeee]'>
              PARTBUY
            </h1>
          </div>
          <Image 
            src={'/search.svg'} 
            alt="search icon" 
            width={20} 
            height={20} 
            quality={100}
            />
        </div>
        <div className="h-[65%] flex flex-col justify-center items-center mx-auto text-center max-w-[440px] p-5 space-y-3">
          <h1 className="text-2xl leading-[24.3px] text-[#eeeeee] uppercase">
            managing virtual real estate investments effortlessly
          </h1>
          <p className="text-[#eeeeee] font-medium text-xs leading-[14.7px]">
            Our dashboard combines user-friendly design with powerful analytics to help you oversee your property portfolio.
          </p>
          <div className="flex justify-center items-center gap-2 w-full text-center">
            <div className="dotted">
              <p className="dotted-text">0$ deposit</p>
            </div>
            <div className="dotted">
              <p className="dotted-text">0$ fully customizable</p>
            </div>
          </div>
          <Button 
            name="view your virtual estate" 
            src="/viewestate.svg" 
            alt="view estate"
            quality={100}
            width={18}
            height={18}
            className="bg-[#eeeeee] text-[#1e1e1e] text-[10px] font-bold leading-[12.3px] rounded-full uppercase px-3 py-1 flex items-center" 
          />
        </div>
      </div>
    </main>
  )
}

export default Hero;