"use client"
import FeaturesComponents from "@/components/features_components"
import React from "react"
import {Element} from "react-scroll"

const FeaturesSction = () => {
  return (
    <Element
      name="features"
      className="bg-[url('/images/svg/cool-background.svg')] bg-no-repeat bg-cover bg-center bg-fixed md:bg-scroll py-12"
    >
      <div className="container flex flex-col gap-8 text-slate-900">
        <h2 className="flex flex-col items-center justify-center text-center md:text-2xl">
          <span>Soccer Champions</span>
          <span className="font-bold tracking-wide">
            Craft Your Club, Conquer the Field, Cash In!
          </span>
        </h2>
        <div className="w-full mx-auto md:w-4/5">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <FeaturesComponents />
          </div>
        </div>
      </div>
    </Element>
  )
}

export default FeaturesSction
