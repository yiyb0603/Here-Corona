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

  @action
  handleAdminPage(data) {
    try {
      const response = AdminRepository.handleAdminPage(data);
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

  @action
  handleAdminPageBar(data) {
    try {
      const response = AdminRepository.handleAdminPageBar(data);
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

  @action
  handleAdminPageBar2(data) {
    try {
      const response = AdminRepository.handleAdminPageBar2(data);
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

  @action
  handleWorldWide(data) {
    try {
      const response = AdminRepository.handleWorldWide(data);
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

  @action
  handleWorldWideBar(data) {
    try {
      const response = AdminRepository.handleWorldWideBar(data);
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

  @action
  handleAdminCircle(data) {
    try {
      const response = AdminRepository.handleAdminCircle(data);
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

  @action
  handleAdminAge(data) {
    try {
      const response = AdminRepository.handleAdminAge(data);
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
