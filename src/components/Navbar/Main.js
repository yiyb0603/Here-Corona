/* eslint-disable */

import React from "react";
import { Component } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sample.scss";
import $ from "jquery";
import "./styleSample.scss";
import { Icon } from "@class101/ui";
import { IoMdAddCircleOutline } from "react-icons/io";
import ColumnChart from "../Chart/Chart";
import Circle from "../Chart/Circle";
class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstman: "977",
      secondman: "13,880",
      thirdman: "22",
      fourthman: "11"
    };
  }

  // render() {
  //   return (
  //     <>
  //       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //         <Navbar.Brand href="#home"></Navbar.Brand>
  //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //         <Navbar.Collapse id="responsive-navbar-nav">
  //           <Nav className="mr-auto">
  //             <Nav.Link href="#features">Features</Nav.Link>
  //             <Nav.Link href="#pricing">Pricing</Nav.Link>

  //             <Nav.Link href="#deets">More deets</Nav.Link>
  //             <Nav.Link eventKey={2} href="#memes">
  //               Dank memes
  //             </Nav.Link>
  //           </Nav>
  //           {/* <Nav>
  //             <Nav.Link href="#deets">More deets</Nav.Link>~`~
  //             <Nav.Link eventKey={2} href="#memes">
  //               Dank memes
  //             </Nav.Link>
  //           </Nav> */}
  //         </Navbar.Collapse>
  //       </Navbar>
  //       색상나오고 마추면 될거임 빨간색은 그냥 보이기 쉬운 색으로 만들어서
  //       나중에 색 나오면 바꾸면 될듯
  //     </>
  //   );
  // }
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
      <div className="allType">
        <div class="wrapper">
          <nav id="sidebar">
            <div class="sidebar-header">
              <h3>메로나, 여기</h3>
            </div>

            <ul class="list-unstyled components">
              <p>Corona?</p>
              <li class="active">
                <a data-toggle="collapse" aria-expanded="false">
                  국내현황
                </a>
              </li>
              <li>
                <a href="#">전세계 현황</a>
                <a data-toggle="collapse" aria-expanded="false">
                  국내 사망자 현황
                </a>
              </li>
              <li>
                <a href="#">격리 해제 현황</a>
              </li>
              <li>
                <a href="#">지역 공유 게시판</a>
              </li>
              <li>
                <a href="#">의심 증상</a>
              </li>
              <li>
                <a href="#">자영업자 장터</a>
              </li>
              <li>
                <a href="#">문의 질문</a>
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
                      <a class="nav-link" href="#">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Page
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </nav>
            <div className="lastUpdate">
              마지막 업데이트: 2020년 02월25일 화요일
            </div>
            <div className="firstBox">
              <div className="mainplusBox">
                <div className="mainText">국내 확진환자</div>
                <div className="plus">
                  <IoMdAddCircleOutline className="circleInPlus" />
                </div>
              </div>
              <br />
              <div className="people">{this.state.firstman} (▲90)명</div>
            </div>
            <div class="line"></div>
            <div className="secondBox">
              <div className="mainplusBox">
                <div className="mainText">검사 진행중</div>
                <div className="plus">
                  <IoMdAddCircleOutline className="circleInPlus" />
                </div>
              </div>
              <br />
              <div className="people">{this.state.secondman} 명</div>
            </div>
            <div></div>
            <div class="line"></div>
            <div className="thirdBox">
              <div className="mainplusBox">
                <div className="mainText">격리 해제</div>
                <div className="plus">
                  <IoMdAddCircleOutline className="circleInPlus" />
                </div>
              </div>
              <br />
              <div className="people">{this.state.thirdman}명</div>
            </div>
            <div class="line"></div>
            <div className="fourthBox">
              <div className="mainplusBox">
                <div className="mainText">사망자</div>
                <div className="plus">
                  <IoMdAddCircleOutline className="circleInPlus" />
                </div>
              </div>
              <br />
              <div className="people">{this.state.fourthman}명</div>
            </div>
            <div class="line"></div>
            <ColumnChart />
            <Circle />
          </div>
        </div>
      </div>
    );
  }
}

export default Sample;
