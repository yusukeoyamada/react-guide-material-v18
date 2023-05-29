import { useLayoutEffect, useEffect, useState, useRef } from "react";

const Random = () => {
  const [state, setState] = useState(0);

  // POINT useLayoutEffect
    // useEffectとした場合に、画面がちらつく(stateが0であるのが一瞬表示されてしまう)場合に使用
      // 原因としては、renderをして、画面に反映された後に、useEffectが実行されるから。
      // useLayoutEffectの場合は、renderして、画面に反映される前に、実行される。
  useLayoutEffect(() => {
    if (state === 0) {
      setState(Math.random() * 300);
    }
  }, [state]);

  return (
    <button
      className="effect-btn"
      onClick={() => setState(0)}
      style={{ fontSize: "2.5em" }}
    >
      state: {state}
    </button>
  );
};
export default Random;
