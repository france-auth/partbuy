import { features } from "@/data"
import Image from "next/image"
import Button from "../Button"

const Features = () => {
  return (
    <section id="features" className="bg-background-light dark:bg-background-dark py-3">
      <div className="flex flex-col w-full justify-center items-center xs:px-7 xx:px-7 xr:px-9 gap-4">
        <div className="flex flex-col justify-center items-center w-full space-y-3 content-center">
          <h2 className="font-bold text-base text-primary-dark dark:text-primary uppercase leading-[16.2px]">
            key features
          </h2>
          <span className="border border-accent w-full" />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center w-full">
          {features.map(({heading, img}, id) => (
            <div key={id} className="flex flex-col w-full relative justify-center items-center">
              <Image 
                src={img} 
                alt={`${heading} img`} 
                className=" w-full h-auto" 
                quality={100} 
                width={1000}
                height={400}
              />
              <div className="bg-[#1C1C1C80] absolute w-full h-full" />
              <div key={id} className="w-full h-max gap-48 left-7 flex flex-col absolute justify-start z-50 ">
                <h2 className="font-normal uppercase text-sm leading-[16px] text-primary opacity-100">
                  {heading}
                </h2>
                <Button 
                  name="read more" 
                  src="/viewestate.svg" 
                  alt="read more"
                  quality={100}
                  width={20}
                  height={20}
                  className="bg-[#eeeeee] text-[#1e1e1e] text-[10px] font-bold leading-[12.3px] rounded-full uppercase px-2 py-1 flex justify-center items-center w-max" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features