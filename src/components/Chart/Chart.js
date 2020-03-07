import React from "react";
import { ColumnChart } from "@opd/g2plot-react";
//
import axios from "axios";
import { SERVER } from "config/server.json";
import { Component } from "react";

// let date = async () => {
//   await axios.get(`${SERVER}/api/infectee/date`).then(response => {
//     console.log(response.data.data.date_infectee);
//     return ({ data } = response.data.data.date_infectee);
//   });
// };
// date();
// const config = {
//   title: {
//     visible: true,
//     text: "국내 확진자 누적 그래프"
//   },
//   forceFit: true,
//   data: this.getinfectee.data,
//   padding: "auto",
//   color: "#e53a40",
//   xField: "type",
//   yField: "sales",
//   meta: {
//     type: {
//       alias: "날짜"
//     },
//     sales: {
//       alias: "국내 확진자"
//     }
//   }
// };

// export default () => (
//   <section>
//     <ColumnChart {...config} />
//   </section>
// );
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getArray: []
    };
  }
  componentDidMount() {
    let date = async () => {
      await axios.get(`${SERVER}/api/infectee/date`).then(response => {
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
    date();
  }
  render() {
    // date();
    const config = {
      title: {
        visible: true,
        text: "국내 확진자 누적 그래프"
      },
      forceFit: true,
      data: this.state.getArray,
      padding: "auto",
      color: "#e53a40",
      xField: "date",
      yField: "number",
      style: { lineWidth: 100, height: 600 },
      meta: {
        date: {
          alias: "날짜"
        },
        number: {
          alias: "국내 확진자"
        }
      }
    };
    return (
      <section>
        <ColumnChart {...config} />
      </section>
    );
  }
}

export default Chart;
