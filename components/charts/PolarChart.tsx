"use client"

import {Pie} from "react-chartjs-2"

import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"
import {useTheme} from "next-themes"

ChartJS.register(ArcElement, Tooltip, Legend)

const PolarChart = () => {
  const {theme} = useTheme()

  return (
    <Pie
      data={{
        labels: [
          "play to earn",
          "private sale",
          "public sale",
          "liqudity",
          "Advisors",
          "community",
          "team",
          "staking rewording",
          "NFT stacking rewording",
          "marketing",
          "ecosystem",
          "centrelized ex",
        ],
        datasets: [
          {
            data: [25, 6, 7, 1, 3, 2, 20, 15, 8, 4, 4, 5],
            backgroundColor: [
              "rgb(14, 100, 155)",
              "rgb(26, 132, 192)",
              "rgb(36, 161, 211)",
              "rgb(15, 57, 95)",
              "rgb(22, 26, 37)",
              "rgb(27, 34, 50)",
              "rgb(88, 37, 54)",
              "rgb(216, 81, 88)",
              "rgb(241, 110, 92)",
              "rgb(246, 136, 71)",
              "rgb(251, 169, 87)",
              "rgb(181, 40, 59)",
            ],
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            position: "left",
            labels: {
              color:
                theme === "dark" ? "hsl(210, 40%, 98%)" : "hsl(223, 84%, 5%)",
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = "Total Value"
                if (label) {
                  label += ": "
                }
                if (context.parsed) {
                  label += context.parsed.toLocaleString() + "%"
                }
                return label
              },
            },
          },
        },
        responsive: true,
      }}
    />
  )
}

export default PolarChart
