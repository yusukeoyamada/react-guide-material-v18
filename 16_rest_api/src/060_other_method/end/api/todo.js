// POINT axiosを用いたAPI
import axios from 'axios';

const ENDPOINT_URL = 'http://localhost:3003/todo'

const todoApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    return result.data;
  },
  async post(todo) {
    // 以下resultは、引数todoと同じものが返ってくる。
    const result = await axios.post(ENDPOINT_URL, todo);
    return result.data;
  },
  async delete(todo) {
    // 以下resultは、空のオブジェクト({})が返ってくる。
    const result = await axios.delete(ENDPOINT_URL + '/' + todo.id);
    return result.data;
  },
  async patch(todo) {
    // 以下resultは、更新されたtodoが返ってくる。
    const result = await axios.put(ENDPOINT_URL + '/' + todo.id, todo);
    return result.data;
  }
}

export default todoApi;