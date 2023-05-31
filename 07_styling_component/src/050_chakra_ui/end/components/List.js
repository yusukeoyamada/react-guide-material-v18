import { VStack, StackDivider, HStack, IconButton, Text } from "@chakra-ui/react";

// POINT react-iconsからアイコンをインポート
import { VscCheck } from "react-icons/vsc";

const List = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  };
  return (
    // VStack: 要素を縦並びに
    <VStack
      divider={<StackDivider />}      // 要素ごとに境界線を引くことができる
      width="80%"
      bgColor="white"
      // 以下のように、mediaクエリのように、画面幅に応じて、サイズを調整できる。
        // color={{ sm: 'red.600', md: 'blue.600', lg: 'green.500', xl: 'red.600' }}
      borderColor="blackAlpha.100"    // border-color        参考: https://chakra-ui.com/docs/styled-system/theme#colors
      borderWidth="1px"               // border-width: 3px
      borderRadius="3px"              // border-radius: 3px
      p={5}                           // padding             参考: https://chakra-ui.com/docs/styled-system/theme?scroll=true#spacing
      alignItems="start"
    >
      {todos.map((todo) => {
        return (
          // HStack: 要素を横並びに
            // spacing: 要素の間隔
          <HStack key={todo.id} spacing="5">
            <IconButton
              onClick={() => complete(todo.id)}
              // 以下で、Icon自体を別のライブラリから取ってくることも可能。
              icon={<VscCheck />}
              isRound                 // isRound="true"と同義
              bgColor="cyan.100"      // background-color
              opacity="0.5"
            >
              完了
            </IconButton>
            {/* 以下は、spanタグだったが、
            将来的にpropsを渡せるようにする為に、Textコンポーネントを使っている。 */}
            <Text>{todo.content}</Text>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default List;
