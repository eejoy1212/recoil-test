function Cnt({ cnt, setCnt }) {
  return (
    <div>
      <h1>Count</h1>
      <button
        onClick={() => {
          setCnt((prev) => prev + 1);
        }}
      >
        +
      </button>
      {cnt}
    </div>
  );
}
export default Cnt;
