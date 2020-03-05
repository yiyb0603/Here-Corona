import React from "react";
import { BarChart } from "@opd/g2plot-react";
import { Component } from "react";
import axios from "axios";
import { SERVER } from "../../config/server.json";

class WorldseroChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getAsia: []
    };
  }
  componentDidMount() {
    let getAllWorld = async () => {
      await axios.get(`${SERVER}/api/infectee/nation`).then(response => {
        console.log(response.data.data.nation_infectee);

        this.setState({
          getAsia: response.data.data.nation_infectee.reverse()
        });
      });
    };
    getAllWorld();
    console.log(this.state.getAsia);
  }
  render() {
    const config = {
      title: {
        visible: true,
        text: "모오든나라"
      },
      forceFit: true,
      data: this.state.getAsia,
      padding: "auto",
      color: "#eb962a",
      xField: "number",
      yField: "nation",
      stroke: "#3e3e3e",
      visible: true,
      lineWidth: 100,
      style: { lineWidth: 100, height: 1000 },
      meta: {
        number: {
          alias: "1번"
        },
        nation: {
          alias: "2번"
        }
      }
    };

    return (
      <>
        <div>
          <section>
            <BarChart {...config} />
          </section>
        </div>
      </>
    );
  }
}
export default WorldseroChart;
