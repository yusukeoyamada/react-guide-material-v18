// POINT 複数ページでの状態の共有（Context使用）
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Form from "../../components/form";
import List from "../../components/list";
import { useAppContext } from "../../context/AppContext";

export default function PageLink() {
  const initialState = { name: "", birth: "" };
  const [value, setValue] = useState(initialState);
  const [list, setList] = useAppContext();
  const router = useRouter();

  const handleChange = (e) => {
    const inputId = e.target.id;
    const inputValue = e.target.value;
    setValue((prev) => ({ ...prev, [inputId]: inputValue }));
  };

  const handleAddClick = () => {
    setList((prev) => [...prev, { ...value, id: new Date().getTime() }]);
    setValue(initialState);
  };

  const handleResetClick = () => {
    setList([]);
  };

  return (
    <div>
      <Form
        handleAddClick={handleAddClick}
        handleResetClick={handleResetClick}
        handleChange={handleChange}
        nameValue={value.name}
        birthValue={value.birth}
      />

      <List list={list} />

      {/* 以下、リンクと同じ挙動をする。 */}
      <button onClick={() => router.push('/09_multipage_state/list')}>
        リストページへ
      </button>

      {/* 以下のように、aタグだけを使用すると、ページ遷移後にブラウザのリロードが走ってしまい、
      stateが初期化されてしまう。
        <a href='/09_multipage_state/list'>
          アンカータグ
        </a> */}
      {/* なので、以下のように、Linkで囲む必要あり。
      以下は、上記ボタンをリンクで表現した場合。 */}
      <Link href='/09_multipage_state/list'>
        <a>
          アンカータグ
        </a>
      </Link>
    </div>
  );
}
