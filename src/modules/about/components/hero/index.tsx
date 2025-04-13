import { Heading } from "@medusajs/ui"
import Image from "next/image"
import titolare from "../../../../../public/simona.avif"

const Hero = () => {
  return (
    <div className="h-[78vh] pt-6 px-6 pb-2 w-full">
      <div className="h-full w-full relative flex justify-center items-center rounded-xl shadow-md overflow-hidden">
        <Image
          src={titolare}
          alt="Simona Bionda"
          quality={75}
          style={{
            objectFit: "cover",
          }}
          className="h-full w-full"
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-between items-center text-center gap-6">
          <span className="py-16 px-4 sm:px-16">
            <Heading
              level="h2"
              className="text-3xl sm:text-4xl leading-10 text-white font-serif"
            >
              Simona Bionda
            </Heading>
            <p className="text-white font-light">Titolare</p>
          </span>
          <span />
          <span />
          <div className="w-full py-16 px-6 bg-gradient-to-t from-neutral-950/80 to-neutral-950/0 flex flex-col items-center justify-center">
            <p className="text-white sm:text-2xl font-light xsmall:px-2">
              SB Center è il centro benessere in cui puoi ritrovare l&apos;armonia e
              l&apos;equilibrio.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
