import { SERVER } from "../../config/server.json";
import axios from "axios";

class AdminRepository {
  async handleAdminLogin(request) {
    //관리자 로그인
    try {
      const { data } = await axios.post(`${SERVER}/api/auth/login`, {
        code: request
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AdminRepository();
