"use client"

import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Informazioni sul prodotto",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Dettagli",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <span className="font-semibold">Ingredienti</span>
      <p>{product.material ? product.material : "-"}</p>
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Spedizione veloce</span>
            <p className="max-w-sm">
              Il tuo ordine sarà spedito entro 3 giorni lavorativi.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Qualità garantita</span>
            <p className="max-w-sm">
              Ti proponiamo solo prodotti di alta qualità, 
              in grado di prendersi cura di te e della tua pelle.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
