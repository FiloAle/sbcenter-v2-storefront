import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404 | SB Center",
  description: "Qualcosa è andato storto",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Pagina non trovata</h1>
      <p className="text-small-regular text-ui-fg-base">
        La pagina che stai cercando non esiste.
      </p>
      <Link
        className="flex gap-x-1 items-center group text-yellow-500 hover:text-yellow-600 transition-all duration-300"
        href="/"
      >
        <Text>Torna alla pagina iniziale</Text>
        <ArrowUpRightMini
          className="group-hover:rotate-45 transition-transform duration-300"
        />
      </Link>
    </div>
  )
}
