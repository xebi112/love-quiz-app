import Rejected from "./rejected";
import { useState } from "react";

function Popup({ setPop }) {
  const [showReject, setShowreject] = useState(false);

  if (showReject) {
    return <Rejected show={setShowreject} />;
  }

  return (
    <div className="Popup-container">
      <p>❤ HEY BABE, ARE YOU READY TO SEE HOW STRONG OUR CONNECTION IS? ❤</p>
      <div className="popup-ans">
        <button className="yes" onClick={() => setPop(false)}>
          Yes 💕
        </button>
        <button className="no" onClick={() => setShowreject(true)}>
          No 😥
        </button>
      </div>
    </div>
  );
}

export default Popup;
