import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sample.scss";
/* eslint-disable */
import { IoMdAddCircleOutline } from "react-icons/io";
import $ from "jquery";
import "./styleSample.scss";
// import WorldChart from "../Chart/WorldChart";
import WorldseroChart from "../Chart/WorldseroChart";
import axios from "axios";
import { SERVER } from "../../config/server.json";
class WorldWide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worldConfirmed: "",
      worldHeal: "",
      worldDeath: ""
    };
  }
  componentDidMount() {
    $(document).ready(function() {
      $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
        $(this).toggleClass("active");
      });
    });
    //
    let getNation = async () => {
      await axios.get(`${SERVER}/api/infectee/nation/total`).then(response => {
        console.log(response.data.data);
        this.setState({
          worldConfirmed: response.data.data.nation_total.confirmed,
          worldHeal: response.data.data.nation_total.heal,
          worldDeath: response.data.data.nation_total.death
        });
      });
    };
    getNation();
  }
  render() {
    return (
      <>
        <div className="allType2">
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
                    <li
                      onClick={() => {
                        this.props.history.push("/NationWideBoard");
                      }}
                    >
                      <a>전국</a>
                    </li>
                    <li
                      onClick={() => {
                        this.props.history.push("/DaeguBoard");
                      }}
                    >
                      <a>대구</a>
                    </li>
                    <li
                      class="active"
                      onClick={() => {
                        this.props.history.push("/BusanBoard");
                      }}
                    >
                      <a>부산</a>
                    </li>
                    <li
                      onClick={() => {
                        this.props.history.push("/SeoulBoard");
                      }}
                    >
                      <a>서울</a>
                    </li>
                  </ul>
                </li>
                <li
                  onClick={() => {
                    this.props.history.push("/symptom");
                  }}
                >
                  <a>의심 증상</a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      this.props.history.push("/market");
                    }}
                  >
                    자영업자 장터
                  </a>
                </li>
                <li>
                  <a>문의/질문</a>
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
            <div id="content">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                  <button type="button" id="sidebarCollapse" class="navbar-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <button
                    class="btn btn-dark d-inline-block d-lg-none ml-auto"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i class="fas fa-align-justify"></i>
                  </button>

                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    {/* <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item active">
                      <a class="nav-link">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        Page
                      </a>
                    </li>
                  </ul> */}
                  </div>
                </div>
              </nav>

              <div className="firstBox1">
                <div className="mainplusBox">
                  <div className="mainText">
                    국제 총 <br /> 확진자
                  </div>
                  <div className="plus">
                    <div
                      className="pressCircle"
                      onClick={() => {
                        // this.props.history.push("/worldInfoAsia");
                        alert("개발중입니다.");
                      }}
                    >
                      <IoMdAddCircleOutline className="circleInPlus" />
                    </div>
                  </div>
                </div>
                <br />
                <div className="peoplePoint1">
                  {this.state.worldConfirmed}명
                </div>
              </div>
              {/* <div class="line"></div> */}
              <div className="thirdBox3">
                <div className="mainplusBox">
                  <div className="mainText">
                    국제 총 <br /> 회복자
                  </div>
                  <div className="plus"></div>
                </div>
                <br />
                <div className="peoplePoint1">{this.state.worldHeal}명</div>
              </div>
              {/* <div class="line"></div> */}
              <div className="fourthBox4">
                <div className="mainplusBox">
                  <div className="mainText">
                    국제 총 <br /> 사망자
                  </div>
                  <div className="plus"></div>
                </div>
                <br />
                <div className="peoplePoint1">{this.state.worldDeath}명</div>
              </div>
              <div class="line"></div>
              <WorldseroChart />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WorldWide;
