import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import HeroSecondary from "@modules/home/components/hero-secondary"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Text } from "@medusajs/ui"

export const metadata: Metadata = {
  title: "SB Center",
  description:
    "La tua bellezza ha un'anima",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="py-8">
        <div className="flex justify-between mb-4 px-6">
          <Text className="text-2xl font-serif">Prenditi cura di te</Text>
          <InteractiveLink href={`/store`}>
            Vedi tutti
          </InteractiveLink>
        </div>
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts countryCode={countryCode} region={region} />
        </ul>
      </div>
      <HeroSecondary/>
    </>
  )
}
