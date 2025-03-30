import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import CookieModal from "@modules/common/components/cookie-modal"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="it" data-mode="light" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <noscript>
          <div className="h-dvh w-full flex flex-col text-center justify-center z-50 bg-white">
            <p className="p-12">
              Questo sito web richiede JavaScript: abilitalo dalle impostazioni del tuo browser per visualizzarlo correttamente.
            </p>
          </div>

          <style>
            {`.relative {display:none;}`}
          </style>
        </noscript>

        <main className="relative">{props.children}</main>

        <CookieModal/>
      </body>
    </html>
  )
}
