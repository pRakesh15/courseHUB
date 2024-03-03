import React from "react";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);
export const LineChart = () => {
  const labels = getLastYearMonths()
  const option = {
    responsive: true,
    plugins: {
      legend: {
        postion: "bottom",
      },
      title: {
        display: true,
        text: "Yearly Views",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Views",
        data: [1, 2, 8, 4, 5,2,3.5,7,8.5,2.4,9,.1],
        borderColor: "rgba(107,70,193,0.5)",
        backgroundColor: "#6b46c1",
      },
    ],
  };
  return <Line option={option} data={data} />;
};

export const DoughnutChart = () => {
  const data = {
    labels: ["Subscribed", "Not Subscribed"],
    datasets: [
      {
        label: "Views",
        data: [12, 17],
        borderColor: ["rgb(62,122,171)", "rgb(214,43,129)"],
        backgroundColor: ["rgba(62,122,171,0.3)", "rgba(214,43,129,0.3)"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

function getLastYearMonths() {
  const labels = [];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth=new Date().getMonth();
  // console.log(currentMonth);
  const remain= 11-currentMonth;
  // console.log(remain)

for(let i=currentMonth;i<months.length;i--)
{
  const element=months[i];
  labels.unshift(element);
  if(i===0) break;
}
// console.log(labels)

for(let i=11;i>currentMonth;i--)
{
  if(i==currentMonth) break; 
  const element=months[i];
  labels.unshift(element);
  
}
// console.log(labels)
return labels

}

getLastYearMonths();
