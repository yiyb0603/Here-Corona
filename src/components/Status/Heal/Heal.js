/* eslint-disable */
import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import { Icon } from "@class101/ui";
import { IoMdAddCircleOutline, IoMdArrowRoundForward } from "react-icons/io";
import { SERVER } from "config/server.json";
import axios from "axios";
import Moment from "moment";

//환자번호	출생년도	성별	격리해제일	감염경로 비고
class Heal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: "",
      confirmedUp: "",
      check: "",
      checkUp: "",
      heal: "",
      healUp: "",
      death: "",
      deathUp: "",
      time: ""
    };
  }

  componentDidMount() {
    $(document).ready(function() {
      $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
        $(this).toggleClass("active");
      });
    });
    let getinfectee = async () => {
      await axios.get(`${SERVER}/api/infectee/total`).then(response => {
        console.log(response.data.data.total_state);
        this.setState({
          confirmed: response.data.data.total_state.confirmed,
          confirmedUp: response.data.data.total_state.last_confirmed,
          check: response.data.data.total_state.check,
          checkUp: response.data.data.total_state.last_check,
          heal: response.data.data.total_state.heal,
          healUp: response.data.data.total_state.last_heal,
          death: response.data.data.total_state.death,
          deathUp: response.data.data.total_state.last_death,
          time: Moment(
            response.data.data.total_state.last_update,
            "llll"
          ).format("YYYY-MM-DD h:mm a")
        });
      });
    };
    getinfectee();
  }

  handleChangeSite() {
    console.log("test");
  }
  render() {
    var { dataList } = this.state;
    return (
      <div className="allType12">
        <div class="wrapper">
          <nav id="sidebar">
            <div class="sidebar-header">
              <h3>코로나, 여기</h3>
            </div>

            <ul class="list-unstyled components">
              <p>Corona?</p>
              <li>
                <a
                  data-toggle="collapse"
                  aria-expanded="false"
                  onClick={() => {
                    this.props.history.push("/");
                  }}
                >
                  국내현황
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.props.history.push("/worldWide");
                  }}
                >
                  전세계 현황
                </a>

                <a
                  onClick={() => {
                    this.props.history.push("/passed");
                  }}
                >
                  국내 사망자 현황
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.props.history.push("/healed");
                  }}
                >
                  국내 격리 해제 현황
                </a>
              </li>
              <li>
                <a
                  href="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  지역 공유 게시판
                </a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                  <li>
                    <a href="/NationWideBoard">전국</a>
                  </li>
                  <li>
                    <a href="/DaeguBoard">대구</a>
                  </li>
                  <li>
                    <a href="/BusanBoard">부산</a>
                  </li>
                  <li>
                    <a href="/SeoulBoard">서울</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">의심 증상</a>
              </li>
              <li>
                <a href="#">자영업자 장터</a>
              </li>
              <li>
                <a href="#">문의/질문</a>
              </li>
            </ul>
            <ul class="list-unstyled CTAs">
              <li>
                <a>지역 콜센터 120</a>
              </li>
              <li>
                <a>콜센터 1339</a>
              </li>
            </ul>
          </nav>
          <div>안녕 네모야 </div>
        </div>
      </div>
    );
  }
}

export default Heal;
