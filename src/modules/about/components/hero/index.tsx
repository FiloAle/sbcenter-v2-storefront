import { Heading } from "@medusajs/ui"
import Image from "next/image"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { PillButton } from "@modules/common/components/pill-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import titolare from "../../../../../public/simonabionda.jpeg"

const Hero = () => {
  return (
    <div className="h-[78vh] pt-6 px-6 pb-2 w-full relative flex justify-center items-center">
      <Image
        src={titolare}
        alt="Simona Bionda"
        quality={100}
        style={{
          objectFit: "cover",
        }}
        className="h-full w-full brightness-50 rounded-xl shadow-md object-top"
      />
      <div className="p-16 absolute inset-0 z-10 flex flex-col justify-between items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h2"
            className="text-3xl sm:text-4xl leading-10 text-white font-serif"
          >
            Simona Bionda
          </Heading>
          <p className="text-white font-light">Titolare</p>
        </span>
        <span className="sm:hidden" />
        <span className="sm:hidden" />
        <p className="text-white sm:text-2xl font-light xsmall:px-2 md:px-16 lg:px-32 xl:px-64">
          SB Center è il centro benessere in cui puoi ritrovare l&apos;armonia e
          l&apos;equilibrio.
        </p>
        <LocalizedClientLink href="/services">
          <PillButton
            variant="primary"
            className="font-normal motion-safe:animate-pulse duration-1200 hover:animate-none"
          >
            Scopri i trattamenti <ChevronRightIcon className="-me-1 mt-[0.5px] sm:mt-[1px] h-[14px] stroke-[2.5px]"/>
          </PillButton>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default Hero
