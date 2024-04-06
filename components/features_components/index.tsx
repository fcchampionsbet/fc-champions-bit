/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import React from "react"
import {featuresData} from "./data"
import {FeaturesType} from "@/types"

const FeaturesComponents = () => {
  return (
    <React.Fragment>
      {featuresData.map((item: FeaturesType, i: number) => (
        <div
          key={i}
          className="flex flex-col gap-4 p-4 m-auto glass text-slate-900"
        >
          <div>
            <h3 className="text-xl font-semibold tracking-wider capitalize">
              {item.title}
            </h3>
            <span className="opacity-80">{item.subtitle}</span>
          </div>
          <div className={`flex flex-col items-center justify-center gap-6`}>
            <p className="leading-relaxed tracking-wide opacity-70 min-h-48">
              {item.description}
            </p>
            <Image
              src={item.image}
              alt={item.imageAlt}
              width={650}
              height={650}
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      ))}
    </React.Fragment>
  )
}

export default FeaturesComponents
