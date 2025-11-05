function Loveresult({ scores, retry }) {
  let message = "";

  if (scores === 100) {
    message =
      "😍 Babe, you know my heart inside out! Our love is unshakable 💖… but I might test you more 😏";
  } else if (scores >= 70) {
    message =
      "🥰 Wow, you really get me! Every day I fall more for you 💛… don’t get too full of yourself 😜";
  } else if (scores >= 50) {
    message =
      "💕 Hehe, you know me quite well! Our bond is growing stronger 💘… maybe pay a little more attention next time 😏";
  } else {
    message =
      "😆 Haha, looks like I need to spoil you with more love! Can’t resist you 💖… pay attention, babe 😝";
  }

  return (
    <div className="result">
      <p>💖 You scored: {scores}%</p>
      <p>{message}</p>
      <button className="retry-btn" onClick={retry}>
        Try Again
      </button>
    </div>
  );
}

export default Loveresult;
