const AnimalItem = ({ animal }) => {
  return (
    // ここで、key設定するのではなく、1つ上の階層でkey設定する。
    <li>
      {animal}
      {animal === "Dog" && "★"}
    </li>
  );
};

export default AnimalItem;