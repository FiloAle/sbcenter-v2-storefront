import { getCollectionsList } from "@lib/data/collections"
import { Label, Text } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Categories() {
  const { collections } = await getCollectionsList(0, 6)

  return (
    <div className="xsmall:content-container flex flex-col w-full pb-12 pt-4">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
            <div className="text-sm">
            {collections && collections.length > 0 && (
                <div className="flex flex-col gap-y-3">
                    <Text className="txt-compact-small-plus text-ui-fg-muted">Categorie</Text>
                    <ul className="grid grid-cols-1 gap-2 text-ui-fg-subtle">
                        {collections.map((c) => (
                        <li key={c.id}>
                            <Label>
                                <LocalizedClientLink
                                    className="!txt-compact-small !transform-none hover:text-yellow-500 transition-all duration-300"
                                    href={`/collections/${c.handle}`}
                                    >
                                    {c.title}
                                </LocalizedClientLink>
                            </Label>
                        </li>
                        ))}
                        <li>
                            <Label>
                                <LocalizedClientLink
                                    className="!txt-compact-small !transform-none hover:text-yellow-500 transition-all duration-300"
                                    href={`/store`}
                                    >
                                    Tutti i prodotti
                                </LocalizedClientLink>
                            </Label>
                        </li>
                    </ul>
                </div>
            )}
            </div>
        </div>
    </div>
  )
}
