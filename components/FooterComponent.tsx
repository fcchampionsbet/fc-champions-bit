import React from "react"

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full p-2 bg-slate-900 text-slate-100">
      <h3>
        &copy; {new Date().getFullYear()} FC Champions Bet. All rights reserved
      </h3>
    </div>
  )
}

export default Footer
