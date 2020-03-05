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
import "./Healmain.scss";
import "./HealNav.scss";
import { Table } from "react-bootstrap";

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
  }

  handleChangeSite() {
    console.log("test");
  }
  render() {
    var { dataList } = this.state;
    return (
      <div className="allType3">
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
              <li class="active">
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
                <a
                  onClick={() => {
                    this.props.history.push("/symptom");
                  }}
                >
                  의심 증상
                </a>
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
                ></div>
              </div>
            </nav>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>환자번호</th>
                  <th>출생년도</th>
                  <th>성별</th>
                  <th>확진일</th>
                  <th>격리해제일</th>
                  <th>감염경로</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>1984(36)</td>
                  <td>여</td>
                  <td>01.20</td>
                  <td>02.06</td>
                  <td>우한방문(1차)</td>
                </tr>
                <tr>
                  <td>#2</td>
                  <td>1964(56)</td>
                  <td>남</td>
                  <td>01.24</td>
                  <td>02.05</td>
                  <td>우한방문(1차)</td>
                </tr>
                <tr>
                  <td>#3</td>
                  <td>1966(54)</td>
                  <td>남</td>
                  <td>01.26</td>
                  <td>02.12</td>
                  <td>우한방문(1차)</td>
                </tr>

                <tr>
                  <td>#4</td>
                  <td>1964(56)</td>
                  <td>남</td>
                  <td>01.27</td>
                  <td>02.09</td>
                  <td>우한방문(1차)</td>
                </tr>

                <tr>
                  <td>#6</td>
                  <td>1964(56)</td>
                  <td>남</td>
                  <td>01.30</td>
                  <td>02.19</td>
                  <td>3번째 환자 접촉자(2차)</td>
                </tr>

                <tr>
                  <td>#7</td>
                  <td>1991(29)</td>
                  <td>남</td>
                  <td>01.31</td>
                  <td>02.15</td>
                  <td>우한방문(1차)</td>
                </tr>

                <tr>
                  <td>#8</td>
                  <td>1957(63)</td>
                  <td>여</td>
                  <td>01.31</td>
                  <td>02.11</td>
                  <td>우한방문(1차)</td>
                </tr>

                <tr>
                  <td>#9</td>
                  <td>1992(28)</td>
                  <td>여</td>
                  <td>01.31</td>
                  <td>02.24</td>
                  <td>5번째 환자 접촉자(2차)</td>
                </tr>

                <tr>
                  <td>#10</td>
                  <td>1966(54)</td>
                  <td>여</td>
                  <td>01.31</td>
                  <td>02.19</td>
                  <td>6번째 환자(3번째 환자 접촉자) 배우자(3차)</td>
                </tr>

                <tr>
                  <td>#11</td>
                  <td>1995(25)</td>
                  <td>남</td>
                  <td>01.31</td>
                  <td>02.01</td>
                  <td>
                    6번째 환자(3번째 환자 접촉자) 접촉자(3차) 6번 확진자의 아들
                  </td>
                </tr>

                <tr>
                  <td>#12</td>
                  <td>1971(49)</td>
                  <td>남</td>
                  <td>02.01</td>
                  <td>02.18</td>
                  <td>일본 내 확진환자 접촉자(2차)</td>
                </tr>

                <tr>
                  <td>#13</td>
                  <td>1992(28)</td>
                  <td>남</td>
                  <td>02.02</td>
                  <td>02.24</td>
                  <td>우한방문(1차):우한 교민</td>
                </tr>

                <tr>
                  <td>#14</td>
                  <td>1980(40)</td>
                  <td>여</td>
                  <td>02.02</td>
                  <td>02.18</td>
                  <td>12번째 환자(일본 내 확진환자 접촉자)배우자 (3차)</td>
                </tr>

                <tr>
                  <td>#15</td>
                  <td>1977(43)</td>
                  <td>남</td>
                  <td>02.02</td>
                  <td>02.24</td>
                  <td>4번째 확진자 접촉자(항공기) (2차)</td>
                </tr>

                <tr>
                  <td>#16</td>
                  <td>1977(43)</td>
                  <td>여</td>
                  <td>02.04</td>
                  <td>02.19</td>
                  <td>태국여행(1차)</td>
                </tr>

                <tr>
                  <td>#17</td>
                  <td>1982(38)</td>
                  <td>남</td>
                  <td>02.05</td>
                  <td>02.11</td>
                  <td>싱가포르 컨퍼런스 내 확진자 접촉자(2차)</td>
                </tr>

                <tr>
                  <td>#18</td>
                  <td>1999(21)</td>
                  <td>여</td>
                  <td>02.05</td>
                  <td>02.19</td>
                  <td>16번 확진자의 딸(2차)</td>
                </tr>

                <tr>
                  <td>#19</td>
                  <td>1983(37)</td>
                  <td>남</td>
                  <td>02.05</td>
                  <td>02.21</td>
                  <td>싱가포르 컨퍼런스 내 확진자 접촉자(2차)</td>
                </tr>

                <tr>
                  <td>#20</td>
                  <td>1978(42)</td>
                  <td>여</td>
                  <td>02.05</td>
                  <td>02.24</td>
                  <td>15번째 확진자(4번째 확진자 접촉자)의 처제(3차)</td>
                </tr>

                <tr>
                  <td>#22</td>
                  <td>1973(47)</td>
                  <td>남</td>
                  <td>02.06</td>
                  <td>02.15</td>
                  <td>16번째 확진자 접촉자(2차)</td>
                </tr>

                <tr>
                  <td>#25</td>
                  <td>1946(74)</td>
                  <td>여</td>
                  <td>02.09</td>
                  <td>02.22</td>
                  <td>27번째 확진자 접촉자(2차)</td>
                </tr>

                <tr>
                  <td>#28</td>
                  <td>1989(31)</td>
                  <td>여</td>
                  <td>02.10</td>
                  <td>02.17</td>
                  <td>3번째 확진자 접촉자(2차)</td>
                </tr>

                <tr>
                  <td>#37</td>
                  <td>1973(47)</td>
                  <td>남</td>
                  <td>02.19</td>
                  <td>02.26</td>
                  <td></td>
                </tr>

                <tr>
                  <td>#51</td>
                  <td>1959(61)</td>
                  <td>여</td>
                  <td>02.19</td>
                  <td>02.26</td>
                  <td></td>
                </tr>

                <tr>
                  <td>#24</td>
                  <td>1992(28)</td>
                  <td>남</td>
                  <td>02.06</td>
                  <td>02.27</td>
                  <td>우한방문(1차)</td>
                </tr>

                <tr>
                  <td>#65</td>
                  <td>1970(50)</td>
                  <td>여</td>
                  <td>02.19</td>
                  <td>02.27</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Heal;
