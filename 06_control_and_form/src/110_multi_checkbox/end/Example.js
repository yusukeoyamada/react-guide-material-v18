import { useState } from "react";

// POINT 複数チェックボックスの実装
const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const newFruits = fruits.map((fruit) => {
      // 別のオブジェクトを作成して、差分を変更して、それをstateに設定する方が良い。
      const newFruit = { ...fruit };
      // 「e.target.value」は、newFruit.valueとは異なる。
        // 下を見れば分かるが、labelが入っている。
      if (newFruit.label === e.target.value) {
        newFruit.checked = !fruit.checked;
      }

      return newFruit;
    });

    setFruits(newFruits);

    // 以下、sumを求める方法
    // (1) forEachバージョン
      // let sumVal = 0;
      // newFruits.forEach(fruit => {
      //   if(fruit.checked) {
      //     sumVal += fruit.value;
      //     // sumVal = sumVal + fruit.value;
      //   }
      // });

    // (2) filter + forEachバージョン
      // let sumVal = 0;
      // newFruits
      //   .filter((fruit) => fruit.checked)
      //   .forEach((fruit) => (sumVal = sumVal + fruit.value));

    // (3) filter + reduceバージョン
    let sumVal = newFruits
      .filter((fruit) => fruit.checked)
      .reduce((sumVal, fruit) => sumVal + fruit.value, 0);
    setSum(sumVal);
  };

  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.label}>
            <input
              id={fruit.label}
              type="checkbox"
              value={fruit.label}
              checked={fruit.checked}
              onChange={handleChange}
            />
            <label htmlFor={fruit.label}>
              {fruit.label}:{fruit.value}
            </label>
          </div>
        );
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
