import InteractiveLink from "@modules/common/components/interactive-link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 | SB Center",
  description: "Qualcosa è andato storto",
}

export default async function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Pagina non trovata</h1>
      <p className="text-small-regular text-ui-fg-base">
        La pagina che hai tentato di accedere non esiste.
      </p>
      <InteractiveLink href="/">Torna alla pagina iniziale</InteractiveLink>
    </div>
  )
}
