import { Heading } from "@medusajs/ui"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { PillButton } from "@modules/common/components/pill-button"
import bgImage from "../../../../../public/home.avif"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

const Hero = () => {
  return (
    <div className="h-[78vh] pt-6 px-6 pb-2 w-full relative flex justify-center items-center">
      <div className="h-full w-full overflow-hidden rounded-xl shadow-md">
        <Image
          src={bgImage}
          alt="SPA"
          quality={75}
          style={{
            objectFit: "cover",
          }}
          className="h-full w-full brightness-50 scale-[1.56] -mt-[8.5rem] -ms-1"
        />
      </div>
      
      <div className="p-16 absolute inset-0 z-10 flex flex-col justify-between items-center text-center small:p-32 gap-6">
        <span />
        <span>
          <Heading
            level="h2"
            className="text-3xl sm:text-4xl leading-10 text-white font-serif"
          >
            La tua bellezza
            <br />
            ha un&apos;anima.
          </Heading>
        </span>
        <LocalizedClientLink href="/services">
          <PillButton
            variant="primary"
            className="font-normal motion-safe:animate-pulse duration-1200 hover:animate-none"
          >
            Scopri la SPA <ChevronRightIcon className="-me-1 mt-[0.5px] sm:mt-[1px] h-[14px] stroke-[2.5px]"/>
          </PillButton>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default Hero
