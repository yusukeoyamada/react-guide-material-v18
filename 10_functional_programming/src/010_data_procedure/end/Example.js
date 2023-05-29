const Example = () => {
  // POINT 関数型
  // （値の）状態と処理を分離して管理
    // 以下Aが処理、Bが状態
    // A(data) -> B(data) -> C(data) -> 結果
    // ★ 状態と処理は切り離す
      // 上記により、
        // 開発者はやりたい内容(accu + curr)にフォーカスでき、実装効率があがる。
        // 何をしたいのかが明確になる。
  const nums = [1,2,3];
  const sum = (arry) => arry.reduce((accu, curr) => accu + curr)

  // POINT オブジェクト指向型
    // 状態（データ）と処理を対で管理
      // objにデータを保持して、そのデータを使って処理をする部分もobjがメソッドとして保持
      // obj.method(); -> 結果
  const numObj = {
    nums: [1,2,3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      for(let i = 0; i < nums.length; i++) {
        sumValue += nums[i];
      }
      return sumValue;
    }
  }

  return (
    <>
      <div>オブジェクト指向型:{numObj.sum()}</div>
      <div>関数型:{sum(nums)}</div>
    </>
  )
};

export default Example;
