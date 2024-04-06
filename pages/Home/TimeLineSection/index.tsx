"use client"
import TimeLine from "@/components/TimeLine"
import React from "react"
import {TimeLineType} from "@/types"
import {Element} from "react-scroll"

const TimeLineFullData: TimeLineType[] = [
  {
    title: {
      phase: "Stage One",
      title: "Branding, Strategy and funding",
      status: "inprogress",
    },
    timelineInfo: [
      {
        infoTitle: "Brand and Strategy",
        infoDisc:
          "Define brand identity and overarching strategy for the project.",
        isComplete: true,
      },
      {
        infoTitle: "Game Logic Development",
        infoDisc: "Begin designing and developing the logic for the game.",
        isComplete: true,
      },
      {
        infoTitle: "Fund Round ICO",
        infoDisc:
          "Initiate an Initial Coin Offering (ICO) to raise funds for the project.",
        isComplete: false,
      },
      {
        infoTitle: "Social Media Channels Launch",
        infoDisc:
          " Establish presence on various social media platforms to engage with potential users and investors.",
        isComplete: false,
      },
      {
        infoTitle: "Pre-market",
        infoDisc:
          "Start building anticipation and awareness for the project before its official launch.",
        isComplete: false,
      },
    ],
  },
  {
    title: {
      phase: "Stage Two",
      title: "Game, ecoSystem Development",
      status: "notactive",
    },
    timelineInfo: [
      {
        infoTitle: "Game Development",
        infoDisc:
          "Actively develop the game according to the established logic and design.",
        isComplete: false,
      },
      {
        infoTitle: "Ecosystem Development",
        infoDisc:
          "Build the ecosystem surrounding the game, including associated features and services.",
        isComplete: false,
      },
      {
        infoTitle: "Smart Contracts Auditing",
        infoDisc:
          "Conduct thorough audits of smart contracts to ensure security and reliability.",
        isComplete: false,
      },
      {
        infoTitle: "Marketing Campaigns",
        infoDisc:
          "Launch marketing campaigns to promote the upcoming game and ecosystem.",
        isComplete: false,
      },
    ],
  },
  {
    title: {
      phase: "Stage Three",
      title: "Ecosystem, prototype Launch",
      status: "notactive",
    },
    timelineInfo: [
      {
        infoTitle: "Ecosystem Launch",
        infoDisc: "Officially introduce the ecosystem to the public.",
        isComplete: false,
      },
      {
        infoTitle: "Game Prototype Launch",
        infoDisc:
          "Release a prototype or demo version of the game for early testing and feedback.",
        isComplete: false,
      },
      {
        infoTitle: "Fund Round IDO",
        infoDisc:
          "Hold an Initial DEX Offering (IDO) to further raise funds and distribute tokens.",
        isComplete: false,
      },
      {
        infoTitle: "Gorilla Marketing Globally",
        infoDisc:
          "Implement aggressive and unconventional marketing strategies to reach a wide audience.",
        isComplete: false,
      },
      {
        infoTitle: "NFT Development",
        infoDisc:
          "Begin development of Non-Fungible Tokens (NFTs) for use within the ecosystem.",
        isComplete: false,
      },
    ],
  },
  {
    title: {
      phase: "Stage Four",
      title: "Final Launch",
      status: "notactive",
    },
    timelineInfo: [
      {
        infoTitle: "NFT Deployment",
        infoDisc: "Deploy the developed NFTs within the ecosystem.",
        isComplete: false,
      },
      {
        infoTitle: "Pre-game Launch",
        infoDisc:
          "Conduct final preparations and testing before the official game launch.",
        isComplete: false,
      },
      {
        infoTitle: "Launching Event",
        infoDisc:
          "Host a special event to mark the official launch of the game and ecosystem.",
        isComplete: false,
      },
    ],
  },
]

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
