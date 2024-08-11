import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { buttonVariants } from './ui/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home">
      {/*=============== Background ==================*/}
      <svg
        className="absolute -z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#020817"
          fillOpacity="1"
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,122.7C672,96,768,96,864,122.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div className="min-h-[512px] flex items-end justify-center px-8 pt-24 mx-auto sm:pt-32 md:pt-16 max-w-7xl">
        <div className="flex flex-col items-center justify-between flex-shrink-0 w-full gap-x-9 md:flex-row">
          {/*=============== Hero Title ==================*/}
          <div className="w-full max-w-2xl">
            <h1 className="mx-auto mb-4 text-3xl font-bold tracking-tighter text-center lg:leading-tight sm:leading-tight max-w-96 sm:max-w-max lg:text-6xl sm:text-5xl sm:text-left">
              High-quality hospital equipment available
            </h1>
            <p className="mx-auto mb-4 text-sm font-normal text-center max-w-96 sm:max-w-max sm:text-left sm:leading-8 sm:text-xl text-muted-foreground">
              Provides a wide range of high-quality hospital equipment, from
              beds to examination and delivery equipment
            </p>

            <div className="flex justify-center gap-x-4 sm:justify-start">
              <Link
                href={"#popularProduct"}
                className={cn(buttonVariants({ size: "sm" }), "rounded-full")}
              >
                Buy now
              </Link>
              <Link
                href={"/products"}
                className={cn(
                  buttonVariants({
                    size: "sm",
                    variant: "outline",
                  }),
                  "rounded-full"
                )}
              >
                Browse Products
              </Link>
            </div>
          </div>

          {/*=============== Hero Image ==================*/}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden rounded-full shadow-lg mx-auto mt-10 md:mt-0">
            <Image
              src="/images/hero-image.jpg"
              alt="hero-image"
              className="object-cover w-full h-full rounded-full"
              layout="responsive"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero