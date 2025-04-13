import { Heading } from "@medusajs/ui"
import Image from "next/image"
import { PillButton } from "@modules/common/components/pill-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import bgImage from "../../../../../public/spa.avif"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

const HeroSecondary = () => {
  return (
    <div className="h-[78vh] p-6 w-full relative flex justify-center items-center">
      <div className="h-full w-full rounded-xl shadow-md overflow-hidden">
        <Image
          src={bgImage}
          alt="Servizi"
          quality={100}
          style={{
            objectFit: "cover",
          }}
          className="h-full w-full brightness-[0.4] scale-[1.38] -mt-[5.5rem]"
        />
      </div>
  
      <div className="p-16 absolute inset-0 z-10 flex flex-col justify-between items-center text-center small:p-32 gap-6">
        <span />
        <span>
          <Heading
            level="h2"
            className="text-3xl sm:text-4xl leading-10 text-white font-serif"
          >
            Il tuo benessere
            <br />
            parte da qui.
          </Heading>
        </span>
        <LocalizedClientLink href="/services#treatments">
          <PillButton
            variant="primary"
            className="font-normal motion-safe:animate-pulse duration-1200 hover:animate-none"
          >
            Scopri i servizi <ChevronRightIcon className="-me-1 mt-[0.5px] sm:mt-[1px] h-[14px] stroke-[2.5px]"/>
          </PillButton>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default HeroSecondary
