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
              <h3>여기 코로나</h3>
            </div>

            <ul class="list-unstyled components">
              <p>Here Corona</p>
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
                  class="active"
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
            <div className="table_death">
              <Table striped bordered hover className="table-responsive">
                <thead>
                  <tr>
                    <th>환자번호</th>
                    <th>출생년도</th>
                    <th>성별</th>
                    <th>사망일</th>
                    <th>신고시도</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>69</td>
                    <td>1935(85)</td>
                    <td>남</td>
                    <td>03.13</td>
                    <td>대구</td>
                  </tr>
                <tr>
                    <td>68</td>
                    <td>1943(77)</td>
                    <td>여</td>
                    <td>03.13</td>
                    <td>경기</td>
                  </tr>
                <tr>
                    <td>67</td>
                    <td>1938(82)</td>
                    <td>남</td>
                    <td>03.12</td>
                    <td>경북</td>
                  </tr>
                <tr>
                    <td>66</td>
                    <td>1946(74)</td>
                    <td>남</td>
                    <td>03.12</td>
                    <td>대구</td>
                  </tr>
                <tr>
                    <td>65</td>
                    <td>1930(90)</td>
                    <td>여</td>
                    <td>03.12</td>
                    <td>대구</td>
                  </tr>
                <tr>
                    <td>64</td>
                    <td>1947(73)</td>
                    <td>남</td>
                    <td>03.11</td>
                    <td>경북</td>
                  </tr>
                <tr>
                    <td>63</td>
                    <td>1933(87)</td>
                    <td>남</td>
                    <td>03.11</td>
                    <td>대구</td>
                  </tr>
                <tr>
                    <td>62</td>
                    <td>1936(84)</td>
                    <td>여</td>
                    <td>03.11</td>
                    <td>대구</td>
                  </tr>
                <tr>
                    <td>61</td>
                    <td>1941(79)</td>
                    <td>여</td>
                    <td>03.10</td>
                    <td>대구</td>
                  </tr>
                <tr>
                    <td>60</td>
                    <td>1939(81)</td>
                    <td>여</td>
                    <td>03.10</td>
                    <td>대구</td>
                  </tr>
                <tr>
                    <td>59</td>
                    <td>1937(83)</td>
                    <td>여</td>
                    <td>03.10</td>
                    <td>대구</td>
                  </tr>
                <tr>
                    <td>58</td>
                    <td>1948(72)</td>
                    <td>남</td>
                    <td>03.10</td>
                    <td>대구</td>
                  </tr>
                <tr>
                    <td>57</td>
                    <td>1961(59)</td>
                    <td>여</td>
                    <td>03.10</td>
                    <td>대구</td>
                  </tr>
                <tr>
                    <td>56</td>
                    <td>1944(76)</td>
                    <td>여</td>
                    <td>03.09</td>
                    <td>대구</td>
                  </tr>
                <tr>
                    <td>55</td>
                    <td>1958(62)</td>
                    <td>남</td>
                    <td>03.09</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>54</td>
                    <td>1938(82)</td>
                    <td>남</td>
                    <td>03.09</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>53</td>
                    <td>1950(70)</td>
                    <td>여</td>
                    <td>03.09</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>52</td>
                    <td>1944(76)</td>
                    <td>남</td>
                    <td>03.09</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>51</td>
                    <td>1950(70)</td>
                    <td>남</td>
                    <td>03.09</td>
                    <td>경북</td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td>1942(78)</td>
                    <td>여</td>
                    <td>03.08</td>
                    <td>경북</td>
                  </tr>
                  <tr>
                    <td>49</td>
                    <td>1929(91)</td>
                    <td>남</td>
                    <td>03.07</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>48</td>
                    <td>1928(92)</td>
                    <td>남</td>
                    <td>03.07</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>47</td>
                    <td>1940(80)</td>
                    <td>여</td>
                    <td>03.07</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>46</td>
                    <td>1953(67)</td>
                    <td>여</td>
                    <td>03.07</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>45</td>
                    <td>1950(70)</td>
                    <td>남</td>
                    <td>03.07</td>
                    <td>경북</td>
                  </tr>
                  <tr>
                    <td>44</td>
                    <td>1919(91)</td>
                    <td>남</td>
                    <td>03.06</td>
                    <td>강원도</td>
                  </tr>
                  <tr>
                    <td>43</td>
                    <td>1940(80)</td>
                    <td>남</td>
                    <td>03.06</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>42</td>
                    <td>1953(67)</td>
                    <td>남</td>
                    <td>03.05</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>41</td>
                    <td>1953(67)</td>
                    <td>남</td>
                    <td>03.05</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>40</td>
                    <td>1936(84)</td>
                    <td>여</td>
                    <td>03.05</td>
                    <td>경북</td>
                  </tr>
                  <tr>
                    <td>39</td>
                    <td>1939(81)</td>
                    <td>남</td>
                    <td>03.05</td>
                    <td>경북</td>
                  </tr>
                  <tr>
                    <td>38</td>
                    <td>1934(86)</td>
                    <td>여</td>
                    <td>03.05</td>
                    <td>경북</td>
                  </tr>
                  <tr>
                    <td>37</td>
                    <td>1942(78)</td>
                    <td>남</td>
                    <td>03.05</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>36</td>
                    <td>1959(61)</td>
                    <td>남</td>
                    <td>03.05</td>
                    <td>경북</td>
                  </tr>
                  <tr>
                    <td>35</td>
                    <td>1948(72)</td>
                    <td>남</td>
                    <td>03.04</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>34</td>
                    <td>1933(87)</td>
                    <td>여</td>
                    <td>03.04</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td>1953(67)</td>
                    <td>여</td>
                    <td>03.04</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>32</td>
                    <td>1942(78)</td>
                    <td>남</td>
                    <td>03.03</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td>1945(75)</td>
                    <td>남</td>
                    <td>03.03</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>1937(83)</td>
                    <td>남</td>
                    <td>03.03</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>1943(77)</td>
                    <td>남</td>
                    <td>03.03</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>1942(78)</td>
                    <td>여</td>
                    <td>03.02</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>1941(79)</td>
                    <td>여</td>
                    <td>03.02</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>#2769</td>
                    <td>1933(86)</td>
                    <td>여</td>
                    <td>03.02</td>
                    <td>경북</td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>1956(64)</td>
                    <td>남</td>
                    <td>03.02</td>
                    <td>대구</td>
                  </tr>

                  <tr>
                    <td>24</td>
                    <td>1955(65)</td>
                    <td>남</td>
                    <td>03.01</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>1949(71)</td>
                    <td>남</td>
                    <td>03.01</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>1943(77)</td>
                    <td>여</td>
                    <td>03.01</td>
                    <td>대구</td>
                  </tr>

                  <tr>
                    <td>21</td>
                    <td>1943(77)</td>
                    <td>여</td>
                    <td>03.01</td>
                    <td>대구</td>
                  </tr>

                  <tr>
                    <td>#2946</td>
                    <td>1934(86)</td>
                    <td>여</td>
                    <td>03.01</td>
                    <td>대구</td>
                  </tr>

                  <tr>
                    <td>#2579</td>
                    <td>1940(80)</td>
                    <td>남</td>
                    <td>03.01</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>1937(83)</td>
                    <td>남</td>
                    <td>03.01</td>
                    <td>대구</td>
                  </tr>

                  <tr>
                    <td>17</td>
                    <td>1943(77)</td>
                    <td>남</td>
                    <td>02.29</td>
                    <td>대구</td>
                  </tr>

                  <tr>
                    <td>#2570</td>
                    <td>1957(63)</td>
                    <td>여</td>
                    <td>02.27</td>
                    <td>대구</td>
                  </tr>

                  <tr>
                    <td>#1875</td>
                    <td>1926(94)</td>
                    <td>여</td>
                    <td>02.28</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>#2467</td>
                    <td>1950(70)</td>
                    <td>여</td>
                    <td>02.28</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>#1443</td>
                    <td>1945(75)</td>
                    <td>남</td>
                    <td>02.27</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>#114</td>
                    <td>1946(74)</td>
                    <td>남</td>
                    <td>02.26</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>#875</td>
                    <td>1984(36)</td>
                    <td>남</td>
                    <td>02.25</td>
                    <td>경기</td>
                  </tr>
                  <tr>
                    <td>#298</td>
                    <td>1962(58)</td>
                    <td>남</td>
                    <td>02.25</td>
                    <td>경북</td>
                  </tr>

                  <tr>
                    <td>#925</td>
                    <td>1951(69)</td>
                    <td>여</td>
                    <td>02.24</td>
                    <td>대구</td>
                  </tr>

                  <tr>
                    <td>#107</td>
                    <td>1953(67)</td>
                    <td>남</td>
                    <td>02.24</td>
                    <td>대구</td>
                  </tr>
                  <tr>
                    <td>#286</td>
                    <td>1958(62)</td>
                    <td>남</td>
                    <td>02.23</td>
                    <td>경북</td>
                  </tr>

                  <tr>
                    <td>#55</td>
                    <td>1961(59)</td>
                    <td>남</td>
                    <td>02.23</td>
                    <td>경북</td>
                  </tr>

                  <tr>
                    <td>#38</td>
                    <td>1963(57)</td>
                    <td>여</td>
                    <td>02.23</td>
                    <td>대구</td>
                  </tr>

                  <tr>
                    <td>#54</td>
                    <td>1963(57)</td>
                    <td>남</td>
                    <td>02.23</td>
                    <td>경북</td>
                  </tr>

                  <tr>
                    <td>#443</td>
                    <td>1979(41)</td>
                    <td>남</td>
                    <td>02.21</td>
                    <td>경북</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>1965(55)</td>
                    <td>여</td>
                    <td>02.21</td>
                    <td>부산</td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>1957(63)</td>
                    <td>남</td>
                    <td>02.19</td>
                    <td>경북</td>
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
