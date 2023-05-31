import { useState } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  // 画面上に表示されるダイアログのようなものを表示できるように
  const toast = useToast();

  const addTodo = (e) => {
    e.preventDefault();

    if (!enteredTodo) {
      toast({
        title: "新しいタスクを入力してください",
        status: "error",  // ここで色を指定
        duration: 2000,   // 表示する間隔
        isClosable: true, // ダイアログの閉じるボタンを表示
      });
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);

    setEnteredTodo("");

    toast({
      title: "新しいタスクを追加しました！",
      description: enteredTodo,
      status: "info",
      duration: 3000,
      isClosable: true,
    });  
  };

  return (
    <form onSubmit={addTodo}>
      <HStack>
        {/* POINT ChakraのInputコンポーネントを使う  */}
        <Input
          placeholder="新しいタスク"
          // placeholderのスタイルを変更したい場合は、以下で
          _placeholder={{ opacity: "0.3", color: "gray.500" }}
          size="lg"
          p={3}
          bgColor="white"
          // 以下で入力欄のスタイルを変更できる。
            // 参考: https://chakra-ui.com/docs/components/input#changing-the-appearance-of-the-input
          variant="flushed"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <Button
          colorScheme="blue"
          size="md"
          bgColor="white"
          // 以下でボタンのスタイルを変更できる。
          variant="outline"
          px={7}
          type="submit"
        >
          追加
        </Button>
      </HStack>
    </form>
  );
};

export default Form;
