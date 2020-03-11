import React from "react";
import { BarChart } from "@opd/g2plot-react";
import { Component } from "react";
import axios from "axios";
import { SERVER } from "../../config/server.json";

class WorldseroChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getAsia: [],
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
      16: [],
      17: [],
      18: [],
      19: [],
      20: [],
      21: []
    };
  }

  componentDidMount() {
    let getAllWorld = async () => {
      await axios.get(`${SERVER}/api/infectee/nation`).then(response => {
        const { nation_infectee } = response.data.data;

        this.setState({
          0: nation_infectee[0].number,
          1: nation_infectee[1].number,
          2: nation_infectee[2].number,
          3: nation_infectee[3].number,
          4: nation_infectee[4].number,
          5: nation_infectee[5].number,
          6: nation_infectee[6].number,
          7: nation_infectee[7].number,
          8: nation_infectee[8].number,
          9: nation_infectee[9].number,
          10: nation_infectee[10].number,
          11: nation_infectee[11].number,
          12: nation_infectee[12].number,
          13: nation_infectee[13].number,
          14: nation_infectee[14].number,
          15: nation_infectee[15].number,
          16: nation_infectee[16].number,
          17: nation_infectee[17].number,
          18: nation_infectee[18].number,
          19: nation_infectee[19].number,
          20: nation_infectee[20].number,
          21: nation_infectee[21].number
        });
      });
    };
    getAllWorld();
  }
  render() {
    const config = {
      title: {
        visible: true,
        text: "전세계 코로나 확진자 수"
      },
      forceFit: true,
      data: [
        {
          nation: "중국",
          number: this.state[0]
        },
        {
          nation: "이탈리아",
          number: this.state[2]
        },
        {
          nation: "이란",
          number: this.state[4]
        },
        {
          nation: "한국",
          number: this.state[1]
        },

        {
          nation: "프랑스",
          number: this.state[9]
        },
        {
          nation: "독일",
          number: this.state[7]
        },
        {
          nation: "스페인",
          number: this.state[11]
        },
        {
          nation: "미국",
          number: this.state[8]
        },
        {
          nation: "일본",
          number: this.state[3]
        },

        {
          nation: "영국",
          number: this.state[17]
        },
        {
          nation: "스위스",
          number: this.state[19]
        },
        {
          nation: "스웨덴",
          number: this.state[20]
        },

        {
          nation: "싱가폴",
          number: this.state[5]
        },

        {
          nation: "홍콩",
          number: this.state[6]
        },
        {
          nation: "말레이시아",
          number: this.state[16]
        },
        {
          nation: "바레인",
          number: this.state[14]
        },
        {
          nation: "오스트레일리아",
          number: this.state[15]
        },
        {
          nation: "쿠웨이트",
          number: this.state[10]
        },
        {
          nation: "케나다",
          number: this.state[18]
        },
        {
          nation: "태국",
          number: this.state[12]
        },
        {
          nation: "대만",
          number: this.state[13]
        },

        {
          nation: "인도",
          number: this.state[21]
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
          alias: "코로나 확진자"
        },
        nation: {
          alias: "국가"
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
