import React, { Suspense } from "react"

import { ImageGallery, EmblaCarousel } from "@modules/products/components/image-gallery"
import { EmblaOptionsType } from 'embla-carousel'
import ProductActions from "@modules/products/components/product-actions"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  const OPTIONS: EmblaOptionsType = { loop: true }

  return (
    <>
      <div
        className="content-container flex flex-col lg:flex-row lg:items-start pt-6 pb-0 lg:pb-6 w-full gap-x-12 overflow-x-clip"
        data-testid="product-container"
      >
        <div className="flex flex-col lg:sticky lg:py-0 lg:w-3/12 py-8 gap-y-6 flex-shrink-0">
          <ProductInfo product={product} />
          <ProductTabs product={product} />

          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
        <div className="h-full w-full">
          <EmblaCarousel thumbnail={product?.thumbnail || ""} images={product?.images || []} />
          {/*<ImageGallery thumbnail={product?.thumbnail || ""} images={product?.images || []} />*/}
        </div>
      </div>
      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
