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
          type: "20대 미만",
          sales: 2407
        },

        {
          type: "40대 미만",
          sales: 1668
        },
        {
          type: "60대 미만",
          sales: 2117
        },
        {
          type: "60대 이상",
          sales: 575
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
