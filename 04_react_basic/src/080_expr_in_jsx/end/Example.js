import Child from "./components/Child";
import Expression from "./components/Expression";

const Example = () => {
  return (
    <div>
      <Child />
      <Expression />
    </div>

    // 以下でも良い
    // <>
    //   <Child />
    //   <Expression />
    // </>
  );
};

export default Example;
