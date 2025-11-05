function Rejected({ show }) {
  return (
    <div className="rejected-container">
      <p>GO back en click the ryt btn 😡</p>
      <button
        className="goback"
        onClick={() => {
          show(false);
        }}
      >
        Okay Fine 🙄
      </button>
    </div>
  );
}
export default Rejected;
