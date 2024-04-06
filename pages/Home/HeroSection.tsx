"use client"

import {Button} from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {useEffect} from "react"
import {FaGooglePlay, FaApple, FaWindows} from "react-icons/fa"
import {Element} from "react-scroll"

const devices = [
  {icon: FaGooglePlay, name: "google play"},
  {icon: FaApple, name: "apple play"},
  {icon: FaWindows, name: "windows play"},
]

const HeroSection = () => {
  useEffect(() => {
    const parallax_el = document.querySelectorAll(".parallax")

    let xValue = 0,
      yValue = 0

    window.addEventListener("mousemove", (e) => {
      xValue = e.clientX - window.innerWidth / 2
      yValue = e.clientY - window.innerHeight / 2
      parallax_el?.forEach((el: any) => {
        let speedx = el.dataset.speedx
        let speedy = el.dataset.speedy
        let speedz = el.dataset.speedz
        let isInLeft =
          parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1
        let zValue =
          (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft

        el.style.transform = `translateX(calc(-50% + ${
          -xValue * speedx
        }px )) translateY(calc(-50% + ${
          -yValue * speedy
        }px )) perspective(2300px) translateZ(${zValue * speedz}px )`
      })
    })
  }, [])

  return (
    <section className="relative w-screen min-h-screen overflow-hidden">
      <Image
        src={"/images/heroBackground.png"}
        alt="background hero"
        className="absolute top-0 left-0"
        fill
        style={{objectFit: "cover"}}
      />
      <Image
        src={"/images/svg/logo.svg"}
        alt="the hero"
        className="parallax absolute top-[50%] left-[50%] transform transition ease-linear -translate-x-1/2 -translate-y-1/2"
        width={230}
        height={100}
        data-speedx="0.03"
        data-speedy="0.06"
        data-speedz="0.1"
      />
      <Image
        src={"/images/cherecter.png"}
        alt="the hero"
        className=" parallax absolute top-[70%] 2xl:top-[75%] left-[50%] transform transition ease-linear -translate-x-1/2 -translate-y-1/2"
        width={150}
        height={100}
        data-speedx="0.02"
        data-speedy="0.02"
        data-speedz="0.04"
      />
      <div className="absolute inset-x-0 left-0 right-0 flex flex-col items-center gap-2 p-1 ml-auto mr-auto text-white bottom-36 max-w-max drop-shadow-2xl backdrop-blur">
        <span className="text-3xl font-bold tracking-wider uppercase rounded lg:text-6xl">
          champions <span className="text-red-600">bet</span>
        </span>
        <span className="text-sm tracking-widest capitalize lg:text-xl drop-shadow-2xl">
          kick off winning streak today!
        </span>
      </div>
      <div className="absolute inset-x-0 left-0 right-0 flex flex-row gap-8 ml-auto mr-auto bottom-24 max-w-max">
        <Button className="bg-red-600 text-slate-100 hover:bg-red-500">
          BUY FCB
          <span className="px-1 text-[10px]">coming soon</span>
        </Button>
        <Button>
          <Link href={"https://fcchampionsbet.gitbook.io/fcb"}>
            White Paper
          </Link>
        </Button>
      </div>
      <div className="absolute inset-x-0 bottom-0 left-0 right-0 flex flex-col gap-1 p-2 ml-auto mr-auto text-white max-w-max backdrop-blur-xl rounded-t-xl">
        <span className="uppercase ">coming soon</span>
        <span className="flex flex-row items-center justify-center gap-4">
          {devices.map((device, i) => (
            <device.icon key={i} className="text-xl " />
          ))}
        </span>
      </div>
    </section>
  )
}

export default HeroSection
