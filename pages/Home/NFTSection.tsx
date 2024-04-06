"use client"
import Image from "next/image"
import React from "react"
import {Element} from "react-scroll"

const NFTCards = [
  {
    cardName: "m.salah",
    price: "25",
    ownerName: "jon doe",
    imgUrl: "/images/mohamed-salah.jpeg",
  },
  {
    cardName: "l.messi",
    price: "10",
    ownerName: "jon doe",
    imgUrl: "/images/lionel-messi.jpeg",
  },
  {
    cardName: "c.ronaldo",
    price: "35",
    ownerName: "jon doe",
    imgUrl: "/images/cristiano-ronaldo.jpeg",
  },
  {
    cardName: "t.neymar",
    price: "60",
    ownerName: "jon doe",
    imgUrl: "/images/neymar.jpeg",
  },
]

const NFTSection = () => {
  return (
    <Element name="NFT" className="container flex flex-col gap-6 py-12">
      <h2 className="flex flex-col items-center justify-center text-center md:text-2xl">
        <span className="text-foreground/60">FootyFame</span>
        <span className="font-bold tracking-wide">
          The Premier NFT Marketplace for Soccer Stars!
        </span>
      </h2>
      <div className="flex flex-col items-center justify-around w-4/5 gap-6 mx-auto md:flex-row">
        <div>
          <h3 className="text-xl font-medium">
            Where Legends Are Minted and Fans Connect with Iconic Moments
          </h3>
          <p className=" max-w-[800px] opacity-80 tracking-wider leading-relaxed">
            Welcome to SoccerStars NFT Marketplace, where the world of football
            meets the exciting realm of non-fungible tokens (NFTs). Dive into a
            digital arena where enthusiasts and collectors can buy, sell, and
            trade NFTs representing famous and powerful football players.
            Whether you re a die-hard fan seeking to own a piece of your
            favorite player s legacy or an investor looking for unique
            opportunities in the sports industry, SoccerStars offers a platform
            where the passion for soccer intersects with blockchain technology.
            Explore our marketplace to discover rare and exclusive NFTs
            showcasing iconic moments, legendary players, and future soccer
            stars. Join us in revolutionizing the way football enthusiasts
            engage with their beloved sport through the power of NFTs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {NFTCards.map((item, i) => (
            <div key={i} className="p-2 glass max-w-max clear-start">
              <Image
                src={item.imgUrl}
                alt={"l.messi"}
                width={250}
                height={300}
                className="rounded"
              />
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between">
                  <span className="uppercase ">{item.cardName}</span>
                  <span>{item.price} FCB</span>
                </div>
                <span className="text-xs opacity-85">
                  selling by: {item.ownerName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default NFTSection
