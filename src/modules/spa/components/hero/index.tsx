import { Heading } from "@medusajs/ui"
import Image from "next/image"
import { PillButton } from "@modules/common/components/pill-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import bgImage from "../../../../../public/ritual.jpg"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

const HeroSPA = () => {
  return (
    <div className="h-[78vh] pt-6 px-6 pb-2 w-full relative flex justify-center items-center">
      <Image
        src={bgImage}
        alt="SPA"
        quality={100}
        style={{
          objectFit: "cover",
        }}
        className="h-full w-full brightness-75 rounded-xl shadow-md object-top"
      />
      <div className="p-16 absolute inset-0 z-10 flex flex-col justify-between items-center text-center small:p-32 gap-6">
        <span />
        <span>
          <Heading
            level="h2"
            className="text-3xl sm:text-4xl leading-10 text-white font-serif"
          >
            Il tuo momento
            <br />
            di pace e relax.
          </Heading>
        </span>
        <a href="#SPA">
          <PillButton
            variant="primary"
            className="font-normal motion-safe:animate-pulse duration-1200 hover:animate-none"
          >
            Scopri tutti i trattamenti SPA <ChevronRightIcon className="-me-1 mt-[0.5px] sm:mt-[1px] h-[14px] stroke-[2.5px]"/>
          </PillButton>
        </a>
      </div>
    </div>
  )
}

export default HeroSPA
