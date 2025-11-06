function Rejected({ show }) {
  return (
    <div className="rejected-container">
     
      <p>HMM Looks like u clicked the wrong Button 
        🤨
      </p>
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
