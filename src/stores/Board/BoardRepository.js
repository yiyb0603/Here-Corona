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

    handleUploadFile = async (request) => {
        try {
            const { data } = await axios.post(`${SERVER}/api/upload`, request);
            return data;
        } catch (error) {
            throw error;
        }
    }

    handleBoardPage = async (idx) => {
        try {
            const { data } = await axios.get(`${SERVER}/api/post/${idx}`);
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

    handleSeoulBoardList = async (ORDER) => {
        try {
            const { data } = await axios.get(`${SERVER}/api/post?region=0&order=${ORDER}`);
            return data;
        } catch (error) {
            throw error;
        }
    }

    handleBoardCommentWrite = async (request) => {
        try {
            const { data } = await axios.post(`${SERVER}/api/post/comment`, request);
            return data;
        } catch (error) {
            throw error;
        }
    }

    handleBoardCommentList = async (POST_IDX) => {
        try {
            const { data } = await axios.get(`${SERVER}/api/post/comment?post=${POST_IDX}`);
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default new BoardRepository();