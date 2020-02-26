import { observable, action } from "mobx";
import { autobind } from "core-decorators";

import AdminRepository from "./AdminRepository";

@autobind
class AdminStore {
  @action
  handleAdminLogin(data) {
    try {
      const response = AdminRepository.handleAdminLogin(data);
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      console.log(error);
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
}

export default AdminStore;
