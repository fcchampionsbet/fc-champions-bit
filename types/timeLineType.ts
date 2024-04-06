export type TimeLineTitleType = {
  phase: string
  title: string
  status: "inprogress" | "complete" | "notactive"
}

export type TimeLineInfoType = {
  infoTitle: string
  infoDisc: string
  isComplete?: boolean
}

export interface TimeLineType {
  title: TimeLineTitleType
  timelineInfo: TimeLineInfoType[]
}
