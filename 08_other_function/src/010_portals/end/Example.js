import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./components/Modal";

/* POINT createPortalの使い方
  説明: マウント先のhtml要素を変更できる

  第一引数: React の子要素としてレンダー可能なもの （要素、文字列、フラグメント、コンポーネントなど）
  第二引数: レンダー先のDOM要素
*/
const ModalPortal = ({ children }) => {
  // 以下html要素にマウントする
  const target = document.querySelector(".container.end");
  return createPortal(children, target);
};

const Example = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    // 子要素「Modal」のclickイベントが発火すると、以下空のdivのclickイベントも発火する(バブリング)
      // ただし、createPortalで、別の子要素にマウントした場合には、
        // 以下でいう、親要素である「container end」のイベントは発火せず、
        // 元の空のdivのイベントが発火することになっている。
          // DOMツリー上は、親と子の関係ではあるが、Reactツリー上は、親と子の関係でないから。
    <div onClick={() => console.log('空のdiv')}>
      <div className="container end" onClick={() => console.log('container')} />

      <button
        type="button"
        onClick={() => setModalOpen(true)}
        disabled={modalOpen}
      >
        モーダルを表示する
      </button>
      
      {modalOpen && (
        <ModalPortal>
          {/* 元は空のdivが親要素だが、「container end」に以下子要素をマウント */}
          <Modal handleCloseClick={() => setModalOpen(false)} />
        </ModalPortal>
      )}
      
    </div>
  );
};

export default Example;
