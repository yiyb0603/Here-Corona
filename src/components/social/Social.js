import React from "react";
import { Component } from "react";
/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
// import "./sample.scss";
import $ from "jquery";
import "./styleSample.scss";
import { Icon } from "@class101/ui";
import Circle from "../Chart/Circle";
import AgeChart from "../Chart/AgeChart";
import SocialChart from "components/Chart/SocialChat";

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teset: ""
    };
  }

  componentDidMount() {
    $(document).ready(function() {
      $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
        $(this).toggleClass("active");
      });
    });
  }
  render() {
    return (
      <>
        <div className="SocialType">
          <div className="allType">
            <div class="wrapper">
              <nav id="sidebar">
                <div class="sidebar-header">
                  <h3>여기 코로나</h3>
                </div>

                <ul class="list-unstyled components">
                  <p>Here Corona</p>
                  <li class="active">
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
                      <li
                        onClick={() => {
                          this.props.history.push("/GwangjuBoard");
                        }}
                      >
                        <a>광주</a>
                      </li>
                      <li
                        onClick={() => {
                          this.props.history.push("/DaejeonBoard");
                        }}
                      >
                        <a>대전</a>
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
                  <li
                    onClick={() => {
                      this.props.history.push("/market");
                    }}
                  >
                    <a>자영업자 장터</a>
                  </li>
                  <li>
                    <a href="https://open.kakao.com/o/swwGCL0b" target="_blank">
                      문의/질문
                    </a>
                  </li>
                </ul>
                <ul class="list-unstyled CTAs">
                  <li>
                    <a>(지역번호)-120</a>
                  </li>
                  <li>
                    <a>콜센터 1339</a>
                  </li>
                </ul>
              </nav>

              <div id="content">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <div class="container-fluid">
                    <button
                      type="button"
                      id="sidebarCollapse"
                      class="navbar-btn"
                    >
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
                현재 지도 추가중에 있습니다.
                <SocialChart />
                <Circle />
                <AgeChart />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Social;
