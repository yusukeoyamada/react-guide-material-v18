import "./Example.css";

/* POINT イベントリスナの登録方法 */
const Example = () => {
  return (
    <div>
      <h3>コンソールを確認してください。</h3>
      <label>
        入力値のイベント：
        <input
          type="text"
          // 値が変更された時に発火
          onChange={() => console.log("onChange検知")}
          // 入力欄から、focusを失った時に発火
          onBlur={() => console.log("onBlur検知")}
          // 入力欄から、focusを得た時に発火
          onFocus={() => console.log("onFocus検知")}
        />
      </label>
      {/* POINT e.target.valueで入力値を取得 */}
      <div>
        <label>
          入力値を取得：
          <input type="text" onChange={(e) => console.log(e.target.value)} />
        </label>
      </div>
      {/* POINT 複数のイベントを登録 */}
      <div
        className="hover-event"
        // 要素にホバーした時に発火
        onMouseEnter={() => console.log("カーソルが入ってきました。")}
        // 要素のホバーが外れた時に発火
        onMouseLeave={() => console.log("カーソルが出ていきました。")}
      >
        ホバーしてね！
      </div>
    </div>
  );
};

export default Example;
