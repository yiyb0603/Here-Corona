import React from "react";
import { PieChart } from "@opd/g2plot-react";

const data = [
  {
    type: "남성",
    value: 343
  },
  {
    type: "여성",
    value: 550
  }
];

const config = {
  forceFit: true,
  title: {
    visible: true,
    text: "메로나"
  },
  description: {
    visible: true,
    text: "확진자 성비"
  },
  radius: 0.8,
  padding: "auto",
  data,
  angleField: "value",
  colorField: "type",
  statistic: {
    visible: true
  }
};

export default () => (
  <section>
    <PieChart {...config} />
  </section>
);
