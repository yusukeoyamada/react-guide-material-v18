const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました。');
  }
  
  const clickHandler2 = () => {
    console.log('ボタンがクリックされました。');
  }

  // const hello = () => { return 'hello react'};
  
  return (
    <>
    {/* POINT イベントハンドラの末尾に()は付けない */}
      {/* 実行されてしまい、returnとしてundefinedが返ってくるだけになるから。
      「onClick={() => clickHandler()}」のように、アロー関数を入れた場合には、()をつける。
      */}
    {/* POINT onClickのCは大文字 */}
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
      {/* 上記でいう、clickHandlerがイベントハンドラ。
      onClick={clickHandler}で、イベントリスナーに登録されたことに。
      */}
      {/* {hello} */}
    </>
  );
};

export default Example;
