import React from "react";

import ReactECharts from "echarts-for-react";

export default function Echarts() {
  const option = {
    title: {
      text: "一周数据变化",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };

  const option2 = {
    title: {
      text: "Referer of a Website",
      subtext: "Fake Data",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const option3 = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        data: [
          [10, 40],
          [50, 100],
          [40, 20],
        ],
        type: "line",
      },
    ],
  };

  const option4 = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [50, 300, 270, 80, 340, 110, 140],
        type: "bar",
      },
    ],
  };

  return (
    <div>
      <h1>我是图表</h1>
      <ReactECharts
        option={option}
        style={{ width: "600px", height: "400px" }}
      />

      <ReactECharts
        option={option2}
        style={{ width: "600px", height: "400px" }}
      />

      <ReactECharts
        option={option3}
        style={{ width: "600px", height: "400px" }}
      />

      <ReactECharts
        option={option4}
        style={{ width: "600px", height: "400px" }}
      />
    </div>
  );
}
