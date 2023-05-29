// POINT サーバーから取得したデータを画面表示
import { useEffect, useState } from "react";
import axios from "axios";

const Example = () => {

  // useState([])とすることで、以下map関数使用時のエラーを回避できる。
  const [ users, setUsers ] = useState()

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('http://localhost:3003/user')
      setUsers(res.data);
    }
    getUser();
  }, []);

  return (
    <div>
      {/* usersの初期値として、[]を渡していないと、undefindには、map関数がないので、エラーとなる。
      ただし、以下のように、「?」(オプショナルチェーイング演算子)をつけると、エラーとならずundefindが返るようになる。 */}
      {users?.map(user => {
        return (
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>age: {user.age}</p>
            <p>hobby: {user.hobbies.join(',')}</p>
          </div>
        )
      })}
    </div>
  )
};

export default Example;
