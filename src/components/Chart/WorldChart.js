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
      type: "2.25",
      sales: 997
    },
    {
      type: "2.26",
      sales: 1146
    }
  ],
  padding: "auto",
  color: "#eb962a",
  xField: "type",
  yField: "sales",
  meta: {
    type: {
      alias: "날짜"
    },
    sales: {
      alias: "국내 확진자"
    }
  }
};

export default () => (
  <section>
    <ColumnChart {...config} />
  </section>
);
