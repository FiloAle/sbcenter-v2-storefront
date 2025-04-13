import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import SBCenterIcon from "../../../../public/sbcenter"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-white relative small:min-h-screen">
      <div className="h-16 bg-white border-b ">
        <nav className="flex h-full items-center content-container justify-between">
          <LocalizedClientLink
            href="/cart"
            className="text-small-semi flex items-center gap-x-2 uppercase flex-1 basis-0 group/back"
            data-testid="back-to-cart-link"
          >
            <ChevronLeftIcon className="h-4 stroke-2 stroke-gold-500 group-hover/back:stroke-gold-700 transition-all duration-300" />

            <span className="mt-px hidden small:block txt-compact-plus text-gold-500 group-hover/back:text-gold-700 transition-all duration-300">
              Torna al carrello
            </span>
            <span className="mt-px block small:hidden txt-compact-plus text-gold-500 group-hover/back:text-gold-700 transition-all duration-300">
              Indietro
            </span>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            alt="Home"
            aria-label="Get back to the homepage"
            data-testid="store-link"
          >
            <SBCenterIcon
              alt="SB Center"
              height={36}
              className="fill-gold-500 transition-all duration-300 !cursor-pointer hover:fill-gold-700"
            />
          </LocalizedClientLink>
          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="relative" data-testid="checkout-container">{children}</div>
    </div>
  )
}
