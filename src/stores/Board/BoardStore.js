import { action } from "mobx";
import { autobind } from "core-decorators";
import BoardRepository from './BoardRepository';

@autobind
class BoardStore {
  @action
  handleBoardInsert(data) {
    try {
        const response = BoardRepository.handleBoardInsert(data);
        return new Promise((resolve, reject) => {
            resolve(response);
        })
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error);
        })
    }
  }

  @action
  handleDaeguBoardList(ORDER) {
    try {
      const response = BoardRepository.handleDaeguBoardList(ORDER);
      return new Promise((resolve, reject) => {
        resolve(response);
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      })
    }
  }

  @action
  handleBusanBoardList(ORDER) {
    try {
      const response = BoardRepository.handleBusanBoardList(ORDER);
      return new Promise((resolve, reject) => {
        resolve(response);
      })
    } catch (error) {
      return new Promise((resolve ,reject) => {
        reject(error);
      })
    }
  }
}

export default BoardStore;