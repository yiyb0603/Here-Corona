import axios from 'axios';
import { SERVER } from "config/server.json";

class BoardRepository {
    handleBoardInsert = async (request) => {
        try {
            const { data } = await axios.post(`${SERVER}/api/post`, request);
            return data;
        } catch (error) {
            throw error;
        }
    }

    handleDaeguBoardList = async (ORDER) => {
        try {
            const { data } = await axios.get(`${SERVER}/api/post?region=4&order=${ORDER}`);
            return data;
        } catch (error) {
            throw error;
        }
    }

    handleBusanBoardList = async (ORDER) => {
        try {
            const { data } = await axios.get(`${SERVER}/api/post?region=3&order=${ORDER}`);
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default new BoardRepository();