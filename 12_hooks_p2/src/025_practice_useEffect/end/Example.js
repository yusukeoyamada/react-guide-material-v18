// POINT useEffectの練習

import { useState, useEffect } from "react";

const Example = () => {
  const [checked, setChecked] = useState(false);

  // checkedが変更される度に、第1引数のコールバック関数が実行される。
  useEffect(() => {
    // checkedがtrueなら、右記が実行される。
    checked && window.alert("checked!");
  }, [checked]);

  return (
    <label>
      <input
        type={"checkbox"}
        value={checked}
        onClick={() => setChecked((checked) => !checked)}
      />
      click me
    </label>
  );
};

export default Example;
