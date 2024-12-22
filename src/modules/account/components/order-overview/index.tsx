"use client"

import { Button } from "@medusajs/ui"

import OrderCard from "../order-card"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"
import { PillButton } from "@modules/common/components/pill-button"

const OrderOverview = ({ orders }: { orders: HttpTypes.StoreOrder[] }) => {
  if (orders?.length) {
    return (
      <div className="flex flex-col gap-y-8 w-full">
        {orders.map((o) => (
          <div
            key={o.id}
            className="border-b border-gray-200 pb-6 last:pb-0 last:border-none"
          >
            <OrderCard order={o} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className="w-full flex flex-col items-center gap-y-4"
      data-testid="no-orders-container"
    >
      <h2 className="text-large-semi">Non c&apos;è nulla da vedere qui</h2>
      <p className="text-base-regular text-center">
      Non hai ancora completato nessun ordine, ma puoi sempre farne uno ora {":)"}
      </p>
      <div className="mt-4">
        <LocalizedClientLink href="/" passHref>
          <PillButton variant={"secondary_dark"} data-testid="continue-shopping-button">
            Inizia il tuo shopping
          </PillButton>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default OrderOverview
