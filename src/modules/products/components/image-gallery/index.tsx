"use client"

import React from 'react'

import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
  thumbnail: string
}

const EmblaCarousel = ({ thumbnail, images }: ImageGalleryProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla flex flex-col items-center">
      <div className="embla__viewport h-full w-full rounded-xl border border-slate-600" ref={emblaRef}>
        <div className="embla__container h-[50vh] lg:h-[76vh] w-full">
          <div className="embla__slide">
            <Image
              src={thumbnail}
              alt={`Anteprima prodotto`}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        
          {images.map((image, index) => {
            return (
              !!image.url && (
                <div className="embla__slide" key={index}>
                  <Image
                    src={image.url}
                    priority={index <= 2 ? true : false}
                    alt={`Immagine prodotto ${index + 1}`}
                    fill
                    style={{
                      objectFit:"cover"
                    }}
                  />
                </div>
              )
            )
          })}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons w-32 grid grid-cols-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel


const ImageGallery = ({ thumbnail, images }: ImageGalleryProps) => {
  return (
    <div className="flex overflow-x-scroll w-full lg:max-w-5xl no-scrollbar rounded-xl">
      <div className="flex flex-nowrap gap-x-4">
        <div className="relative aspect-[4/5] overflow-hidden h-full w-80 rounded-xl border border-slate-600">
          <Image
            src={thumbnail}
            alt={`Anteprima prodotto`}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        
        {images.map((image, index) => {
          return (
            <div
              key={image.id}
              className="relative aspect-[4/5] overflow-hidden h-fit w-80 rounded-xl border border-slate-600"
              id={image.id}
            >
              
              {!!image.url && (
                <Image
                  src={image.url}
                  priority={index <= 2 ? true : false}
                  alt={`Immagine prodotto ${index + 1}`}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { ImageGallery, EmblaCarousel }