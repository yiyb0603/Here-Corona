import React, { Component } from "react";
import { PieChart } from "@opd/g2plot-react";

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getArrayMin: []
    };
  }
  render() {
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
      color: ["#05C2AB", "#FF5152"],
      angleField: "value",
      colorField: "type",
      statistic: {
        visible: true
      }
    };
    return (
      <>
        <div>
          <section>
            <PieChart {...config} />
          </section>
        </div>
      </>
    );
  }
}

export default Circle;
