import { Transition } from "@headlessui/react"
import { Button, clx } from "@medusajs/ui"
import React, { Fragment, useMemo } from "react"

import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

type MobileActionsProps = {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
  options: Record<string, string | undefined>
  updateOptions: (title: string, value: string) => void
  inStock?: boolean
  handleAddToCart: () => void
  isAdding?: boolean
  show: boolean
  optionsDisabled: boolean
}

const MobileActions: React.FC<MobileActionsProps> = ({
  product,
  variant,
  inStock,
  handleAddToCart,
  isAdding,
  show,
}) => {
  const price = getProductPrice({
    product: product,
    variantId: variant?.id,
  })

  const selectedPrice = useMemo(() => {
    if (!price) {
      return null
    }
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

  return (
    <>
      <div className="lg:hidden inset-x-0 bottom-0 fixed">
        <div
          className="bg-white flex flex-col gap-y-3 justify-center items-center text-large-regular p-4 h-full w-full border-t border-gray-200"
          data-testid="mobile-actions"
        >
          <div className="flex items-center gap-x-2">
            <span data-testid="mobile-title" className="line-clamp-1">{product.title}</span>
            <span>—</span>
            {selectedPrice ? (
              <div className="flex items-end gap-x-2 text-ui-fg-base">
                {selectedPrice.price_type === "sale" && (
                  <p>
                    <span className="line-through text-xs font-normal text-slate-400">
                      {selectedPrice.original_price}
                    </span>
                  </p>
                )}
                <span
                  className={clx({
                    "text-md font-semibold text-gold-500":
                      selectedPrice.price_type === "sale",
                  })}
                >
                  {selectedPrice.calculated_price}
                </span>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="w-full gap-x-4">
            <Button
              onClick={handleAddToCart}
              disabled={!inStock || !variant}
              className="w-full h-10 rounded-full !bg-black text-white shadow-md hover:bg-slate-900 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-slate-50"
              isLoading={isAdding}
              data-testid="mobile-cart-button"
            >
              { 
                !variant ? "Seleziona variante" : !inStock ? "Non disponibile" : "Aggiungi al carrello"
              }
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileActions
