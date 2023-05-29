// POINT クラスコンポーネントにおける状態管理
import { Component } from "react";

class SwitchButton extends Component {
  // クラスが呼ばれる時に、1度だけ呼ばれる。
    // 引数にpropsが渡ってくる。
  constructor(props) {
    // 継承元のComponentにpropsを渡すルール。
    super(props);
    // 以下でstateを定義。
    this.state = {
      switchOn: true,
      label: 'On'
    }
    this.changeSwitch = this.changeSwitch.bind(this);
  }

  changeSwitch() {
    // ステートを更新する為に、「this.setState」を使う。
      // 引数にコールバック関数を
        // コールバック関数の引数には、現状のstateを
        // コールバック関数の処理内で、更新されたstateを定義して、returnする。
    // Strictモードがデフォルトで有効な状態では、thisはundefindに。
      // ここでは、thisとして、SwitchButtonを使いたい。
    this.setState(prevState => {
      return {
        switchOn: !prevState.switchOn,
        label: !prevState.switchOn ? 'On' : 'Off'
      }
    })
  }

  render() {
    // ここでstateを分割代入。
    const { label } = this.state;
    return (
      // 上記constructor内で定義しない場合において、
      // ここで、「this.changeSwitch.bind(this)」としてもよい。
      <button onClick={this.changeSwitch}>{label}</button>
    )
  }
}
const Example = () => {
  return (
    <>
      <SwitchButton />
    </>
  );
};

export default Example;
