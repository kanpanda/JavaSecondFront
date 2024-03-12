import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // reactのhooksの一つ。第二引数が変化したタイミングで、中の関数が実行される。第二変数がからの状態では、「画面が描画されたタイミング」で実行することとなる。
  useEffect(() => {

    fetch("http://localhost:8080/user/all", { method: "GET" })// fetch関数は、HTTPリクエストを送るメソッドの理解でよい。いつもブラウザにURLを入れてるのは「HTTPリクエストのGETメソッド」という意味なので、ここの意味と合致する
      .then(res => res.json()) // thenは、上のfetchで値が取得出来るまで処理を待ってくれる。
      .then(userdate => { //これも。上の処理が終わったら、取得したデータをuserdateという名前で使えるようにしている。
        console.log(userdate)
        console.log("画面が描画されたタイミングで表示されます")
        setUsers(userdate)
      })
  }, []); //第二引数

  const [users, setUsers] = useState([])

  return (
    <>
              <h1>こちらでいいねをお願いします。</h1>
              <LikeButton></LikeButton>
              <h1>こちらが社員一覧です</h1>
              <h1>こちらが社員一覧です</h1>

      {/* map関数は、javaでいうfor文みたいなもの。今回、usersはリストなので、一人ひとり画面を移さないといけないので、for文となる。
    javaと違うところは、アロー関数を使ってるところ。
    個々の和約をすると、「usersというリストの値を、userという変数に入れて、=> 以降の()の中に代入して描画する、という意味 */}
      {users.map((user) => (
        <div>
          <h2>社員番号：{user.userId}</h2>
          <h2>名前：{user.userName}</h2>
          <h2>年齢：{user.age}</h2>
          <hr></hr>

        </div>
      ))}

    </>
  )
}

// いいねボタンの作成
function LikeButton() {
  const [count, setCount] =useState(999); //useStateで関数コンポーネントに状態を持たせる
  // span要素をクリックしたときにcountの値を増加するhandleClick関数を実装
  // handleClick関数はcountに+1した値を返す
  const handleClick = () =>{
    setCount(count + 1);
  };
  // span要素のonClick属性にhandleClick関数を渡す
  return (
  <span className='likeButton' onClick={handleClick}>♡{count}  </span>
  )

}



export default App
