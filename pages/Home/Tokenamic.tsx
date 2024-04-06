"use client"
import PolarChart from "@/components/charts/PolarChart"
import Image from "next/image"
import React from "react"
import {Element} from "react-scroll"

const tokenDescribtion = [
  {
    discribe:
      "Staking: Players can stake their existing FCB Tokens to earn rewards or unlock certain in-game features. Staking allows players to contribute to the stability and security of the network while being incentivized with additional tokens.",
  },
  {
    discribe:
      "Token Rewarding: By actively participating in gameplay, completing challenges, or achieving milestones within the supported games, players can earn FCB Tokens as rewards. These tokens serve as an acknowledgment of the players achievements and progression within the gaming ecosystem.",
  },
  {
    discribe:
      "Payment Currency: FCB Tokens serve as the primary payment currency within the gaming ecosystem. Players can use FCB Tokens to purchase in-game items, unlock premium features, or transact in the game environment. The seamless integration of FCB Tokens as the payment currency ensures a unified and efficient gaming experience for players.",
  },
  {
    discribe:
      "Fee Payments: All fees within the ecosystem, including transaction fees, platform fees, and other service charges, are payable in FCB Tokens. This ensures that the entire gaming ecosystem operates on a decentralized and autonomous model, where participants are incentivized to use and hold FCB Tokens.",
  },
  {
    discribe:
      "The FCB Token ecosystem creates a symbiotic relationship between players, developers, and other stakeholders, fostering a dynamic and rewarding gaming environment. As players engage with the supported games, they contribute to the growth and success of the ecosystem while being rewarded with FCB Tokens for their participation and achievements. FCB Token aims to revolutionize the gaming industry by providing a decentralized and rewarding gaming experience for players worldwide through staking, token rewarding, and seamless integration as a payment currency.",
  },
]

const Tokenamic = () => {
  return (
    <Element name="tokenomics" className="container flex flex-col gap-8 py-12">
      <h2 className="flex flex-col items-center justify-center md:text-2xl">
        <span className="text-foreground/60">Tokenomics</span>
        <span className="font-bold tracking-wide">FCB Token Distribution!</span>
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="col-span-1">
          <PolarChart />
        </div>
        <div className="flex flex-col col-span-1 gap-6 tracking-wider">
          <h2 className="text-xl font-semibold uppercase">
            total supply 1,000,000,000 FCB
          </h2>
          <p className="leading-relaxed ">
            FCB Token is a digital cryptocurrency designed to serve as the
            primary currency within the gaming ecosystem. FCB Token aims to
            provide players with a seamless and rewarding gaming experience.
          </p>
          <p className="leading-relaxed ">
            Participation in the FCB Token ecosystem is open to all players who
            wish to engage in the supported games. Players can acquire FCB
            Tokens through various means, including:
          </p>
          <ul className="flex flex-col gap-4 list-inside">
            {tokenDescribtion.map((item, i) => (
              <li key={i} className="flex flex-row items-start gap-4">
                <Image
                  src={"/images/svg/logo.svg"}
                  alt="logo"
                  width={20}
                  height={20}
                />
                <p>{item.discribe}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Element>
  )
}

export default Tokenamic
