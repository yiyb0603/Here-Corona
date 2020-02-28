import { SERVER } from "config/server.json";
import axios from "axios";

class AdminRepository {
  async handleAdminLogin(request) {
    //관리자 로그인
    try {
      const { data } = await axios.post(`${SERVER}/api/auth/login`, request);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handleAdminPage(request) {
    //국내 정보 수정
    try {
      const { data } = await axios.put(
        `${SERVER}/api/infectee/total
      `,
        request,
        {
          headers: {
            "x-access-token": localStorage.getItem("x-access-token")
          }
        }
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handleAdminPageBar(request) {
    //바 그래프 날짜 추가
    try {
      const { data } = await axios.post(
        `${SERVER}/api/infectee/date`,
        request,
        {
          headers: {
            "x-access-token": localStorage.getItem("x-access-token")
          }
        }
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handleAdminPageBar2(idx) {
    //바 그래프 날짜 수정
    try {
      const { data } = await axios.put(`${SERVER}/api/infectee/date/${idx}`, {
        headers: {
          "x-access-token": localStorage.getItem("x-access-token")
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handleWorldWide(request) {
    //전세계 정보 수정
    try {
      const { data } = await axios.put(
        `${SERVER}
      `,
        request,
        {
          headers: {
            "x-access-token": localStorage.getItem("x-access-token")
          }
        }
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handleWorldWideBar(request) {
    //전세계 바 그래프 추가
    try {
      const { data } = await axios.post(`${SERVER}`, request, {
        headers: {
          "x-access-token": localStorage.getItem("x-access-token")
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handleAdminCircle(request) {
    //성별 원그래프
    try {
      const { data } = await axios.put(
        `${SERVER}
      `,
        request,
        {
          headers: {
            "x-access-token": localStorage.getItem("x-access-token")
          }
        }
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handleAdminAge(request) {
    //나이별 바그래프
    try {
      const { data } = await axios.put(
        `${SERVER}
      `,
        request,
        {
          headers: {
            "x-access-token": localStorage.getItem("x-access-token")
          }
        }
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AdminRepository();
