import React from "react";
import { ColumnChart } from "@opd/g2plot-react";

const config = {
  title: {
    visible: true,
    text: "국제 총 확진자 누적 그래프"
  },
  forceFit: true,
  data: [
    {
      get: "2.25",
      tex: 997
    },
    {
      get: "2.26",
      tex: 1146
    }
  ],
  padding: "auto",
  color: "#eb962a",
  xField: "get",
  yField: "tex",
  meta: {
    get: {
      alias: "날짜"
    },
    tex: {
      alias: "국내 확진자"
    }
  }
};

export default () => (
  <section>
    <ColumnChart {...config} />
  </section>
);
