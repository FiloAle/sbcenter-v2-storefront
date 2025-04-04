import { Metadata } from "next"

import HeroAbout from "@modules/about/components/hero"
import { Text } from "@medusajs/ui"
import Image from "next/image"
import omegna from "../../../../../public/omegna.jpg"
import arona from "../../../../../public/arona.jpg"
import storia from "../../../../../public/storia.png"

export const metadata: Metadata = {
  title: "Chi siamo | SB Center",
  description: "Scopri di più su di noi",
}

export default async function About() {
  return (
    <>
      <HeroAbout />

      <div className="py-12 px-6">
        <div className="flex justify-between mb-4">
          <Text className="text-2xl font-serif">La nostra storia</Text>
        </div>

        <div className="w-full h-full border border-slate-600 rounded-xl shadow-md flex flex-col lg:flex-row overflow-hidden">
          <Image 
            src={storia}
            alt="Trattamento SB Center"
            className="h-52 xsmall:h-96 lg:w-1/2 inset-0 object-cover"
            draggable={false}
          />

          <div className="lg:w-1/2 p-6 flex flex-col justify-between gap-y-6 lg:gap-y-0">
            <div>
              <Text className="font-sans font-light text-lg lg:text-xl text-slate-500">
                SB Center di Simona Bionda <span className="font-normal text-gold-500">nasce nel 1989</span> sulle sponde del Lago d’Orta, a Omegna. 
                Con l’avanzare delle tecnologie, nel 2000 si decide di espandere l’attività sul Lago Maggiore, ad Arona. 
                Da oltre 35 anni, SB Center è un centro benessere dove, oltre ai trattamenti e ai rituali di bellezza per il corpo, 
                puoi vivere momenti di <span className="font-normal text-gold-500">ritrovata armonia</span>.
              </Text>
            </div>
            
            <div>
              <p>
                – Simona Bionda
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-12">
        <ul className="flex flex-col gap-x-6">
          <div className="px-6">
            <div className="flex justify-between mb-4">
              <Text className="text-2xl font-serif">Vieni a trovarci</Text>
            </div>
            <ul className="grid grid-cols-1 xsmall:grid-cols-2 gap-6">
              <li>
                <a
                  href="https://maps.app.goo.gl/JeWozpaRGnJWt6taA"
                  target="_blank"
                  className="group"
                >
                    <div className="group/card transition-all duration-300 rounded-xl border border-slate-600 shadow-md hover:shadow-lg !overflow-hidden">
                        <Image
                            src={omegna}
                            alt="Omegna"
                            className="h-52 xsmall:h-96 inset-0 object-cover object-center border-b border-slate-600 group-hover/card:opacity-80 transition-all duration-300"
                            draggable={false}
                        />

                        <div className="flex flex-col text-md p-4 pt-5 justify-between items-start">
                            <Text className="text-slate-600 line-clamp-2 sm:line-clamp-1">
                                Omegna (VB)
                            </Text>
                            <div className="flex items-center gap-x-2">
                                <Text className="text-slate-400">
                                    Via Luigi Comoli, 38
                                </Text>
                            </div>
                        </div>
                    </div>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/sxNk7dsBxQFGrUKS6"
                  target="_blank"
                  className="group"
                >
                    <div className="group/card transition-all duration-300 rounded-xl border border-slate-600 shadow-md hover:shadow-lg !overflow-hidden">
                        <Image
                            src={arona}
                            alt="Arona"
                            className="h-52 xsmall:h-96 inset-0 object-cover object-center border-b border-slate-600 group-hover/card:opacity-80 transition-all duration-300"
                            draggable={false}
                        />
                        
                        <div className="flex flex-col text-md p-4 pt-5 justify-between items-start">
                            <Text className="text-slate-600 line-clamp-2 sm:line-clamp-1">
                                Arona (NO)
                            </Text>
                            <div className="flex items-center gap-x-2">
                                <Text className="text-slate-400">
                                    Via Amizzone Conte, 4
                                </Text>
                            </div>
                        </div>
                    </div>
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </>
  )
}
