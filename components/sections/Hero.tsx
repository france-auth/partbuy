import Button from "../Button";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <section id="home" className="hero-main">
      <div className="h-screen mx-auto w-full space-y-3">
        <Navbar />
        <div className="hero-content">
          <h1 className="xs:text-lg xx:text-xl xr:text-2xl xs:leading-[24.3px] sm:text-3xl lg:text-4xl xl:text-5xl text-[#eeeeee] uppercase">
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
    </section>
  )
}

export default Hero;