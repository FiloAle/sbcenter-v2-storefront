import { Suspense } from "react"
import { ShoppingBag } from "@medusajs/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import Image from "next/image"
import logo from "../../../../../public/sbcenter.svg"
import SideMenu from "@modules/layout/components/menu"
import SBCenterIcon from "../../../../../public/sbcenter"

export default async function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="px-6 text-xs text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu />
            </div>
          </div>

          <div className="flex items-center h-full !cursor-pointer group/logo">
            <LocalizedClientLink
              href="/"
            >
              {/* <Image
                src={logo}
                alt="SB Center"
                height={36}
                className="!cursor-pointer"
              /> */}

              <SBCenterIcon
                alt="SB Center"
                height={36}
                className="!cursor-pointer fill-slate-600 group-hover/logo:fill-yellow-500 transition-all duration-300"
              />
            </LocalizedClientLink>
          </div>

          <div className="z-0 flex items-center gap-x-3 h-full flex-1 basis-0 justify-end">
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-slate-600 transition-all duration-300 hover:text-yellow-500 flex gap-2 items-center"
                  href="/cart"
                >
                  <ShoppingBag/> <div className="mt-px ms-px pt-0.5 h-5 w-5 bg-slate-600 rounded-full text-white font-semibold text-center items-center justify-center">0</div>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}