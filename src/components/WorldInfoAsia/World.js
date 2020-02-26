import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sample.scss";
/* eslint-disable */
import { IoMdAddCircleOutline } from "react-icons/io";
import $ from "jquery";
import "./styleSample.scss";
class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstman: "80,005",
      firtManUpdate: "",
      secondman: "",
      secondManUpdate: "",
      thirdman: "",
      thirdMainUpdate: "",
      fourthman: "",
      fourthManUpdate: ""
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
        <div className="allType">
          <div class="wrapper">
            <nav id="sidebar">
              <div class="sidebar-header">
                <h3>메로나, 여기</h3>
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
                <li class="active">
                  <a
                    onClick={() => {
                      this.props.history.push("/worldWide");
                    }}
                  >
                    전세계 현황
                  </a>
                </li>
                <li>
                  <a data-toggle="collapse" aria-expanded="false">
                    국내 사망자 현황
                  </a>
                </li>
                <li>
                  <a>격리 해제 현황</a>
                </li>
                <li>
                  <a>지역 공유 게시판</a>
                </li>
                <li>
                  <a>의심 증상</a>
                </li>
                <li>
                  <a>자영업자 장터</a>
                </li>
                <li>
                  <a>문의 질문</a>
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
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default World;
