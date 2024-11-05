import Image from "next/image";
import MailSvg from "./svgcomponent/MailSvg";
import CallSvg from "./svgcomponent/CallSvg";
import FacebookSvg from "./svgcomponent/FacebookSvg";
import SearchSvg from "./svgcomponent/SearchSvg";
import NotificationSvg from "./svgcomponent/NotificationSvg";
import ProfileSvg from "./svgcomponent/ProfileSvg";
import InstagramSvg from "./svgcomponent/InstagramSvg";
import XSvg from "./svgcomponent/XSvg";
import Link from "next/link";
import YoutubeSvg from "./svgcomponent/YoutubeSvg";

const NavItems = [
  {
    item: "home"
  },
  {
    item: "featured"
  },
  {
    item: "about us"
  },
  {
    item: "contact us"
  },
]
const NavLinks = () => {
  return (
    <nav className="flex justify-evenly items-center">
      <ul className="flex justify-evenly items-center list-none gap-9 uppercase">
        {NavItems.map(({item}, id) => (
          <Link href={`/${item}`} key={id} className="flex w-max font-bold text-[#FFFFFF]">
            <li className="relative group w-full">
              <span>{item}</span>
              {/* Custom underline */}
              <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#00FAEB] scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="px-5 sm:px-7 md:px-9 lg:px-16 w-full flex lg:justify-between border-b border-b-[#eeeeee] items-center">
          <div className="lg:flex hidden justify-center items-center">
            <div className="socialsvg">
              <FacebookSvg 
                width={20} 
                height={20} 
                className="" 
              />
            </div>
            <div className="socialsvg">
              <InstagramSvg 
                width={20} 
                height={20} 
                className="" 
              />
            </div>
            <div className="socialsvg">
              <XSvg 
                width={20} 
                height={20} 
                className="" 
              />
            </div>
            <div className="socialsvg">
              <YoutubeSvg 
                width={20} 
                height={20} 
                className="" 
              />
            </div>
          </div>
          <div className="flex justify-evenly w-full lg:max-w-max">
            <div className="svgstyle">
              <MailSvg 
                width={20} 
                height={20} 
                className="" 
              />
              <p className="svgtext">partbuyrealestate@gmail.com</p>
            </div>
            <div className="svgstyle">
              <CallSvg 
                width={18} 
                height={18} 
                className="" 
              />
              <p className="svgtext">phone_number</p>
            </div>
            <div className="svgstyle">
              <CallSvg 
                width={18} 
                height={18} 
                className="" 
              />
              <p className="svgtext">phone_number</p>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-around lg:justify-between items-center py-2 px-5 sm:px-7 md:px-9 lg:px-20'>
          <Image 
            src={'/hamburger.svg'} 
            alt="hamburger menu" 
            width={20} 
            height={20}
            quality={100}
            className="lg:hidden"
            />
          <div className=" flex justify-center items-center gap-3">
            <Image 
              src={'/mobilelogo.svg'} 
              alt="logo" 
              width={30} 
              height={30}
              quality={100}
              layout="intrinsic"
              className="lg:hidden w-full sm:w-10 sm:h-auto"
            />
            <Image 
              src={'/desktop-logo.svg'} 
              alt="logo" 
              width={35} 
              height={35}
              quality={100}
              layout="intrinsic"
              className="hidden lg:flex w-full"
            />
            <h1 className='text-[10px] sm:text-xs md:text-sm font-light text-[#eeeeee]'>
              PARTBUY
            </h1>
          </div>
          <div className="flex gap-20">
            <div className="hidden lg:flex">
              <NavLinks />
            </div>
              <div className="flex">
                <div className="svgstylee hidden lg:flex">
                  <NotificationSvg 
                    width={30} 
                    height={30} 
                    className="" 
                  />
                </div>
                <div className="svgstylee lg:hidden flex">
                  <SearchSvg 
                    width={20} 
                    height={20} 
                    className="" 
                  />
                </div>
                <div className="hidden lg:flex svgstylee">
                  <SearchSvg 
                    width={30} 
                    height={30} 
                    className="" 
                  />
                </div>
                <div className="svgstylee hidden lg:flex">
                  <ProfileSvg 
                    width={30} 
                    height={30} 
                    className="" 
                  />
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar