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
import "./Deathmain.scss";
import "./DeathNav.scss";
import { Table } from "react-bootstrap";

//환자번호	출생년도	성별	사망일	감염경로 비고
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
      <div className="allType4">
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
                <li class="active">
                  <a
                    onClick={() => {
                      this.props.history.push("/passed");
                    }}
                  >
                    국내 사망자 현황
                  </a>
                </li>
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
            <div className="table_death">
              <Table striped bordered hover className="table-responsive">
                <thead>
                  <tr>
                    <th>환자번호</th>
                    <th>출생년도</th>
                    <th>성별</th>
                    <th>사망일</th>
                    <th>감염경로</th>
                    <th>비고</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>35</td>
                    <td>1948(72)</td>
                    <td>남</td>
                    <td>03.04</td>
                    <td></td>
                    <td>
                      2월 24일 코로나19 확진 판정을 받고 즉시 계명대
                      동산병원으로 입원해 치료를 받았으나 3월 4일
                      사망.(기저질환: 당뇨, 고혈압)
                    </td>
                  </tr>
                  <tr>
                    <td>34</td>
                    <td>1933(87)</td>
                    <td>여</td>
                    <td>03.04</td>
                    <td></td>
                    <td>
                      호흡곤란 증세로 대구의료원 격리병동에 입원 중
                      사망.(기저질환: 고혈압, 치매)
                    </td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td>1953(67)</td>
                    <td>여</td>
                    <td>03.04</td>
                    <td></td>
                    <td>
                      칠곡경북대병원 응급실을 거쳐 음압격리 병동으로 입원 중
                      오전 1시 50분경 폐렴으로 사망.
                    </td>
                  </tr>
                  <tr>
                    <td>32</td>
                    <td>1942(78)</td>
                    <td>남</td>
                    <td>03.03</td>
                    <td></td>
                    <td>
                      오후 5시 6분에 수성구 자택에서 쓰러져 파티마병원으로
                      옮겨졌으나 사망.
                    </td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td>1945(75)</td>
                    <td>남</td>
                    <td>03.03</td>
                    <td></td>
                    <td>
                      2월 23일 확진 판정을 받고 24일 경북대병원에 입원. 3월 3일
                      오후 2시쯤 사망.(기저질환: 만성폐쇄성 폐질환)
                    </td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>1937(83)</td>
                    <td>남</td>
                    <td>03.03</td>
                    <td></td>
                    <td>
                      전날 호흡곤란으로 쓰러진 후 응급실에 이송됐고 양성 판정을
                      받음. 치매를 앓았던 것으로 확인.
                    </td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>1943(77)</td>
                    <td>남</td>
                    <td>03.03</td>
                    <td></td>
                    <td>새벽 3시 5분 계명대 동산병원에서 입원치료 중 사망.</td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>1942(78)</td>
                    <td>여</td>
                    <td>03.02</td>
                    <td></td>
                    <td>
                      22월 29일 대구가톨릭대병원 응급실에 내원해 자체 검사를
                      받았으며, 3월 2일 오전 0시쯤 사망 후 양성 판정을
                      받음.(기저질환: 뇌졸중, 고혈압, 당뇨)
                    </td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>1941(79)</td>
                    <td>여</td>
                    <td>03.02</td>
                    <td></td>
                    <td>
                      오후 1시쯤 계명대동산병원으로 심정지 상태로 이송돼
                      심폐소생술 시도에도 불구하고 사망. 평소 지병을 앓아왔고,
                      사후에 코로나19 양성 판정.(기저질환: 심장질환)
                    </td>
                  </tr>
                  <tr>
                    <td>#2769</td>
                    <td>1933(86)</td>
                    <td>여</td>
                    <td>03.02</td>
                    <td></td>
                    <td>
                      대구 계명대 동산병원 입원 중 사망.(기저질환: 천식, 고혈압)
                    </td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>1956(64)</td>
                    <td>남</td>
                    <td>03.02</td>
                    <td></td>
                    <td>
                      26일 확진 이후 영남대병원에서 사망. 기저질환을 갖고 있던
                      것으로 알려짐.
                    </td>
                  </tr>

                  <tr>
                    <td>24</td>
                    <td>1955(65)</td>
                    <td>남</td>
                    <td>03.01</td>
                    <td></td>
                    <td>
                      26일 확진 이후 영남대병원에 입원해 치료를 받다
                      중환자실에서 사망.
                    </td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>1949(71)</td>
                    <td>남</td>
                    <td>03.01</td>
                    <td></td>
                    <td>
                      지난달 25일 확진 판정을 받고 대구경북대병원 음압병실에서
                      치료받다가 사망.
                    </td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>1943(77)</td>
                    <td>여</td>
                    <td>03.01</td>
                    <td></td>
                    <td>
                      입원 대기 중 숨진 4번째 환자. 대구 수성구 가정집에서 숨진
                      것을 경찰이 확인해 수성보건소에 통보.(기저질환: 기관지염)
                    </td>
                  </tr>

                  <tr>
                    <td>21</td>
                    <td>1943(77)</td>
                    <td>여</td>
                    <td>03.01</td>
                    <td></td>
                    <td>
                      2월 29일 파티마병원에 입원해 치료를 받던 중 사망.
                      대구에서는 12번째.(기저질환: 암, 고혈압, 당뇨)
                    </td>
                  </tr>

                  <tr>
                    <td>#2946</td>
                    <td>1934(86)</td>
                    <td>여</td>
                    <td>03.01</td>
                    <td></td>
                    <td>
                      대구가톨릭대병원 응급실에서 입원 대기 중 사망.(기저질환:
                      고혈압, 당뇨)
                    </td>
                  </tr>

                  <tr>
                    <td>#2579</td>
                    <td>1940(80)</td>
                    <td>남</td>
                    <td>03.01</td>
                    <td></td>
                    <td>
                      칠곡경북대학교병원에서 입원 중 사망.(기저질환: 고혈압)
                    </td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>1937(83)</td>
                    <td>남</td>
                    <td>03.01</td>
                    <td></td>
                    <td>
                      2월 27일 선별진료소에서 검사를 받고 다음날 확진판정을
                      받자마자 경북대병원 음압병상에 입원해 치료를 받다가
                      사망.(기저질환: 뇌경색, 고혈압, 당뇨)
                    </td>
                  </tr>

                  <tr>
                    <td>17</td>
                    <td>1943(77)</td>
                    <td>남</td>
                    <td>02.29</td>
                    <td></td>
                    <td>
                      23일 칠곡경북대병원에 입원해 25일 새벽에 확진 판정.
                      음압병상에서 치료하던 확진자 29일 사망.(기저질환: 치매,
                      파킨슨병)
                    </td>
                  </tr>

                  <tr>
                    <td>#2570</td>
                    <td>1957(63)</td>
                    <td>여</td>
                    <td>02.27</td>
                    <td></td>
                    <td>
                      27일 영남대병원에서 숨져 코로나19 진단 검사 결과 양성
                      판정.(기저질환: 암)
                    </td>
                  </tr>

                  <tr>
                    <td>#1875</td>
                    <td>1926(94)</td>
                    <td>여</td>
                    <td>02.28</td>
                    <td></td>
                    <td>
                      요양원에 장기간 입원 중이었던 환자로 23일 확정 판정을 받고
                      입원 중 사망.(기저질환: 심장질환)
                    </td>
                  </tr>
                  <tr>
                    <td>#2467</td>
                    <td>1950(70)</td>
                    <td>여</td>
                    <td>02.28</td>
                    <td></td>
                    <td>
                      대구에서 자가격리 중 가톨릭병원 응급실로 긴급이송 됐으나
                      사망(자가격리 중 숨진 2번째 사례).(기저질환: 고협압, 당뇨)
                    </td>
                  </tr>
                  <tr>
                    <td>#1443</td>
                    <td>1945(75)</td>
                    <td>남</td>
                    <td>02.27</td>
                    <td>신천지대구교회</td>
                    <td>
                      대구지역의 병상 부족으로 집에서 격리생활을 하다
                      영남대병원으로 긴급 이송됐지만 사망. 과거 기저질환이
                      있었음.(신장이식을 받은 이력)
                    </td>
                  </tr>
                  <tr>
                    <td>#114</td>
                    <td>1946(74)</td>
                    <td>남</td>
                    <td>02.26</td>
                    <td>신천지대구교회</td>
                    <td>
                      선별진료소를 통해 대구의료원에 입원했다가 패혈성 쇼크로
                      사망.(기저질환: 만성간질환)
                    </td>
                  </tr>
                  <tr>
                    <td>#875</td>
                    <td>1984(36)</td>
                    <td>남</td>
                    <td>02.25</td>
                    <td>청도대남병원</td>
                    <td>
                      몽골인 남성으로 간 이식 수술을 받으러 입국해 치료를 받다가
                      사망(외국인 첫 사례).(기저질환: 만성간질환)
                    </td>
                  </tr>
                  <tr>
                    <td>#298</td>
                    <td>1962(58)</td>
                    <td>남</td>
                    <td>02.25</td>
                    <td>청도대남병원</td>
                    <td>
                      청도대남병원 관련 일곱 번째 사망 사례. 폐렴이 악화되어
                      사망.(기저질환: 정신질환)
                    </td>
                  </tr>

                  <tr>
                    <td>#925</td>
                    <td>1951(69)</td>
                    <td>여</td>
                    <td>02.24</td>
                    <td>신천지대구교회</td>
                    <td>
                      복부 팽만 증상으로 칠곡 경북대병원을 통해 입원하여 치료 중
                      급성 호흡 부전으로 사망. 사망 후 양성 판정.
                      신천지대구교회와 관련된 것으로 확인. (기저질환: 고협압,
                      당뇨)
                    </td>
                  </tr>

                  <tr>
                    <td>#107</td>
                    <td>1953(67)</td>
                    <td>남</td>
                    <td>02.24</td>
                    <td></td>
                    <td>청도대남병원 관련 사례.(기저질환: 정신질환)</td>
                  </tr>
                  <tr>
                    <td>#286</td>
                    <td>1958(62)</td>
                    <td>남</td>
                    <td>02.23</td>
                    <td></td>
                    <td>청도대남병원 관련 사례.(기저질환: 정신질환)</td>
                  </tr>

                  <tr>
                    <td>#55</td>
                    <td>1961(59)</td>
                    <td>남</td>
                    <td>02.23</td>
                    <td></td>
                    <td>
                      경북 청도대남병원에 입원해 있던 환자. 동국대 경주병원으로
                      이송돼 입원 치료 중 저녁에 사망.(기저질환: 정신질환)
                    </td>
                  </tr>

                  <tr>
                    <td>#38</td>
                    <td>1963(57)</td>
                    <td>여</td>
                    <td>02.23</td>
                    <td></td>
                    <td>
                      기저질환이 있었고, 입원 중 에크모 사용. 경북대병원에서
                      사망.(기저질환: 만성신질환)
                    </td>
                  </tr>

                  <tr>
                    <td>#54</td>
                    <td>1963(57)</td>
                    <td>남</td>
                    <td>02.23</td>
                    <td></td>
                    <td>
                      경북 청도대남병원에서 입원해 있었으며, 폐렴이 악화돼
                      사망.(기저질환: 정신질환)
                    </td>
                  </tr>

                  <tr>
                    <td>#443</td>
                    <td>1979(41)</td>
                    <td>남</td>
                    <td>02.21</td>
                    <td></td>
                    <td>
                      경주 경북에서 확진 판정 이후 자택에서 사망.(기저질환:
                      정신질환
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>1965(55)</td>
                    <td>여</td>
                    <td>02.21</td>
                    <td>청도대남병원</td>
                    <td>
                      경북 청도대남병원에서 확진판정을 받고 부산대병원 이송 중
                      사망.
                    </td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>1957(63)</td>
                    <td>남</td>
                    <td>02.19</td>
                    <td>청도대남병원</td>
                    <td>
                      경북 청도대남병원에 정신질환으로 입원 중 19일 새벽 폐렴이
                      악화돼 사망.(기저질환: 정신질환)
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div>삼가 고인의 명복을 빕니다.</div>
            <div>
              더 이상 코로나19로 인한 피해자가 발생하지 않길 빌겠습니다.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Heal;
