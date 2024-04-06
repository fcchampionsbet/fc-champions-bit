"use client"

import {Link} from "react-scroll"

const LinksNavbar = () => {
  const LinkItems = [
    {linkTitle: "features"},
    {linkTitle: "tokenomics"},
    {linkTitle: "developmnet stages"},
    {linkTitle: "NFT"},
  ]

  return (
    <div className="flex justify-end flex-1">
      <ul className="flex flex-col gap-4 py-4 text-xl font-medium md:py-2 md:text-sm md:gap-8 md:flex-row">
        {LinkItems.map((item, i) => (
          <Link
            key={i}
            activeClass="active"
            to={item.linkTitle}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className=" hover:cursor-pointer"
          >
            {item.linkTitle}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default LinksNavbar
