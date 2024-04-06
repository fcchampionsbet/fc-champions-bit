import {TimeLineType} from "@/types"
import React from "react"

const TimeLine = ({title, timelineInfo}: TimeLineType) => {
  return (
    <div className={`flex flex-col md:flex-row gap-6 glass overflow-hidden`}>
      <div
        className={`${
          title.status === "inprogress"
            ? "bg-orange-500"
            : title.status === "complete"
            ? "bg-green-500"
            : "bg-gray-400"
        } relative rounded flex flex-col justify-center items-center p-2 shadow-lg`}
      >
        <div className="flex flex-col items-center justify-center w-40 h-40 bg-red-600 rounded-full drop-shadow-md">
          <h3 className="text-lg font-semibold tracking-wider uppercase">
            {title.phase}
          </h3>
          <span className="w-4/5 text-center capitalize break-words ">
            {title.title}
          </span>
        </div>
        <div className="font-semibold tracking-widest text-center uppercase">
          {title.status === "inprogress"
            ? "in progress"
            : title.status === "complete"
            ? "complete"
            : "not active"}
        </div>
      </div>
      <div className="flex flex-col gap-2 p-6">
        {timelineInfo.map((item, i) => (
          <ul key={i} className="list-disc text-slate-900">
            <li className={`${item.isComplete && "line-through opacity-50"}`}>
              <span className="font-bold uppercase ">{item.infoTitle}</span>
              <p className="px-4 opacity-85">{item.infoDisc}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default TimeLine
