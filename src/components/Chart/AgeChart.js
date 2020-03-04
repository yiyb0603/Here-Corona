import { StackColumnChart } from "@opd/g2plot-react";
import React from "react";
import { Component } from "react";

class AgeChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mean: ""
    };
  }

  render() {
    const config = {
      title: {
        visible: true,
        text: "확진자 연령대별 확진자 수"
      },
      forceFit: true,
      data: [
        {
          type: "0.9",
          sales: 4
        },
        {
          type: "10.19",
          sales: 22
        },
        {
          type: "20.29",
          sales: 196
        },
        {
          type: "30.39",
          sales: 113
        },
        {
          type: "40.49",
          sales: 146
        },
        {
          type: "50.59",
          sales: 222
        },
        {
          type: "60.69",
          sales: 142
        },
        {
          type: "70.79",
          sales: 39
        },
        {
          type: "80.89",
          sales: 9
        }
      ],
      padding: "auto",
      xField: "type",
      color: [
        "#55A6F3",
        "#55A6F3",
        "#55A6F3",
        "#CED4DE",
        "#55A6F3",
        "#55A6F3",
        "#55A6F3",
        "#55A6F3"
      ],
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

    return (
      <>
        <div>
          <StackColumnChart {...config} />
        </div>
      </>
    );
  }
}

export default AgeChart;

// export default () => (
//   <section>
//   </section>
// );
