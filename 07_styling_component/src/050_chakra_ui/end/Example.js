/* POINT Chakra UIのインポート
  https://chakra-ui.com/
*/
import { ChakraProvider } from "@chakra-ui/react";

import Todo from "./components/Todo";

const Example = () => {
  // POINT Chakra UIを使用するためにChakraProviderでラップする
    // 参考: https://chakra-ui.com/getting-started/cra-guide#2-provider-setup
  return (
    <>
      <ChakraProvider>
        <Todo />
      </ChakraProvider>
    </>
  );
};

export default Example;
