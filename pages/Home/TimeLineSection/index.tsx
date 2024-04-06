"use client"
import TimeLine from "@/components/TimeLine"
import React from "react"
import {TimeLineFullData} from "./data"
import {TimeLineType} from "@/types"
import {Element} from "react-scroll"

const TimeLineSection = () => {
  return (
    <Element
      name="developmnet stages"
      className="py-12 bg-[url('/images/cool-background.png')] bg-no-repeat bg-cover bg-center bg-fixed"
    >
      <div className="container flex flex-col gap-8 md:w-[65%]">
        <h2 className="flex flex-col items-center justify-center text-center md:text-2xl text-slate-900">
          <span className=" opacity-80">Evolutionary Phases of Innovation</span>
          <span className="font-bold tracking-wide">
            Journey Through Development Stages
          </span>
        </h2>
        {TimeLineFullData.map((item: TimeLineType, i: number) => (
          <TimeLine
            key={i}
            title={item.title}
            timelineInfo={item.timelineInfo}
          />
        ))}
      </div>
    </Element>
  )
}

export default TimeLineSection
