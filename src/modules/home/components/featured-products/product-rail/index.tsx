import { getProductsList } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  countryCode,
  region,
}: {
  countryCode: string
  region: HttpTypes.StoreRegion
}) {

  const {
    response: { products },
  } = await getProductsList({
    pageParam: 0,
    queryParams: {
      limit: 4
    },
    countryCode: countryCode,
  })

  if (!products) {
    return null
  }

  return (
    <div className="px-6 m-px">
      <ul className="grid grid-cols-2 small:grid-cols-4 gap-6 small:gap-y-12">
        {products &&
          products.slice(0, 4).map((product) => (
            <li key={product.id}>
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>
    </div>
  )
}
