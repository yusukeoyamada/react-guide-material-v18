const AnimalFilter = ({ filterState }) => {
  // 親コンポーネントから渡されたstate関連の記述をここで変数化。
  const [filterVal, setFilterVal] = filterState;

  return (
    <input
      type="text"
      value={filterVal}
      onChange={(e) => setFilterVal(e.target.value)}
    />
  );
};
export default AnimalFilter;
