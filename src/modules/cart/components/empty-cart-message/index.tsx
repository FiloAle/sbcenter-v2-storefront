import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 px-2 flex flex-col justify-center items-start" data-testid="empty-cart-message">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        Carrello
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        Sembra che il tuo carrello sia vuoto. <br/>
        Clicca sul link qui sotto e visualizza il catalogo prodotti.
      </Text>
      <div>
        <InteractiveLink href="/store">Esplora i prodotti</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
