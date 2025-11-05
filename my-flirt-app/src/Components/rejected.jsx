function Rejected({ show }) {
  return (
    <div className="rejected-container">
     
      <p>Jxt giv it a try 😔</p>
      <p>df</p>
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
