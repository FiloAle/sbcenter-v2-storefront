import { Metadata } from "next"
import { notFound } from "next/navigation"

import AddressBook from "@modules/account/components/address-book"

import { getRegion } from "@lib/data/regions"
import { getCustomer } from "@lib/data/customer"

export const metadata: Metadata = {
  title: "Indirizzi | SB Center",
  description: "Visualizza i tuoi indirizzi",
}

export default async function Addresses({
  params,
}: {
  params: { countryCode: string }
}) {
  const { countryCode } = params
  const customer = await getCustomer()
  const region = await getRegion(countryCode)

  if (!customer || !region) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="addresses-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Indirizzi di consegna</h1>
        <p className="text-base-regular">
          Visualizza e modifica i tuoi indirizzi di consegna per i prossimi acquisti. 
          Salvarli qui ti permetterà di risparmiare tempo al checkout.
        </p>
      </div>
      <AddressBook customer={customer} region={region} />
    </div>
  )
}
