import React from "react";
import { BarChart } from "@opd/g2plot-react";
import { Component } from "react";
import axios from "axios";
import { SERVER } from "../../config/server.json";

class SocialChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getRegion: [],
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
      11: [],
      12: [],
      13: [],
      14: [],
      15: [],
      16: []
    };
  }

  componentDidMount() {
    let getRegionData = async () => {
      await axios.get(`${SERVER}/api/infectee/region`).then(response => {
        const { region_infectee } = response.data.data;
        console.log(region_infectee);

        this.setState({
          0: region_infectee[0],
          1: region_infectee[1],
          2: region_infectee[2],
          3: region_infectee[3],
          4: region_infectee[4],
          5: region_infectee[5],
          6: region_infectee[6],
          7: region_infectee[7],
          8: region_infectee[8],
          9: region_infectee[9],
          10: region_infectee[10],
          11: region_infectee[11],
          12: region_infectee[12],
          13: region_infectee[13],
          14: region_infectee[14],
          15: region_infectee[15],
          16: region_infectee[16]
        });
      });
    };
    getRegionData();
    console.log(this.state.getAsia);
  }
  render() {
    const config = {
      title: {
        visible: true,
        text: "지역별 코로나 확진자"
      },
      forceFit: true,
      data: [
        {
          nation: "대구",
          number: this.state[4]
        },
        {
          nation: "서울",
          number: this.state[0]
        },
        {
          nation: "세종",
          number: this.state[1]
        },
        {
          nation: "인천",
          number: this.state[2]
        },
        {
          nation: "부산",
          number: this.state[3]
        },

        {
          nation: "광주",
          number: this.state[5]
        },
        {
          nation: "대전",
          number: this.state[6]
        },
        {
          nation: "울산",
          number: this.state[7]
        },
        {
          nation: "경기도",
          number: this.state[8]
        },
        {
          nation: "강원도",
          number: this.state[9]
        },
        {
          nation: "충청남도",
          number: this.state[10]
        },
        {
          nation: "충청북도",
          number: this.state[11]
        },
        {
          nation: "전라남도",
          number: this.state[12]
        },
        {
          nation: "전라북도",
          number: this.state[13]
        },
        {
          nation: "경상남도",
          number: this.state[14]
        },
        {
          nation: "경상북도",
          number: this.state[15]
        },
        {
          nation: "제주도",
          number: this.state[16]
        }
      ],
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
          alias: "지역별 코로나 확진자"
        },
        nation: {
          alias: "지역"
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
export default SocialChart;
