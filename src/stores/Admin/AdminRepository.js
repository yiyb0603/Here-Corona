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
    //정보 수정
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
}

export default new AdminRepository();
