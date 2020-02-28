import React from "react";
import { ColumnChart } from "@opd/g2plot-react";
import { Component } from "react";

class WorldChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      null: ""
    };
  }
  componentDidMount() {
    let getWorld = async () => {
      await axios.get(`${SERVER}/api/`).then(response => {
        if (response.data.data.date_infectee.reverse().length >= 4) {
          response.data.data.date_infectee.length = 4;
          this.setState({
            getArray: response.data.data.date_infectee
          });
        } else {
          return null;
        }
      });
    };
    getWorld();
    // console.log(getArray);
  }
  render() {
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

    return (
      <>
        <section>
          <ColumnChart {...config} />
        </section>
      </>
    );
  }
}

export default WorldChart;

// export default () => (
//   <section>
//     <ColumnChart {...config} />
//   </section>
// );
