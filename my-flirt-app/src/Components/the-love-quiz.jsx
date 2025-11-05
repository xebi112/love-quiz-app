import { useState } from "react";
import Popup from "./love-quiz-pop-up";
import Loveresult from "./Love-Result";

function Lovequiz() {
  const loveQuestions = [
    {
      id: 1,
      question: "What's something I cant go a day without?",
      Options: ["Music🎼🎵🎧", "Food🍚", "You🧑🏽", "Sleep😴"],
      answer: "You🧑🏽",
    },
    {
      id: 2,
      question: "Which one best describes me?",
      Options: ["Funny😂", "Serious😐", "Romantic💘", "All of the above 😏"],
      answer: "All of the above 😏",
    },
    {
      id: 3,
      question: "What pet do i love the most",
      Options: ["Dogs 🐩", "Cats 😾", "Birds 🦜", "None 😅"],
      answer: "Dogs 🐩",
    },
    {
      id: 4,
      question: "Whats's my love language?",
      Options: [
        "Words of affirmation 💬",
        "Quality Time 🕗",
        "Physical Touch 🤝",
        "Gifts 🎁",
      ],
      answer: "Words of affirmation 💬",
    },
    {
      id: 5,
      question: "What's my favorite thing to call you?",
      Options: ["Babe 💞", "Love 🧡", "My World 🌍", "Princess 👑"],
      answer: "Babe 💞",
    },
    {
      id: 6,
      question: "If i could choose one thing forever,wht would it be?",
      Options: ["Success 🏆", "Peace 🕊", "Money 💸", "You 💖"],
      answer: "You 💖",
    },
    {
      id: 7,
      question: "Which one im i better at?",
      Options: [
        "Making you laugh 😂",
        "Giving advice 💭",
        "Listening 👂",
        "All the above 😎",
      ],
      answer: "All the above 😎",
    },
    {
      id: 8,
      question: "What's something I'd never do to you?",
      Options: [
        "Ignore you on purpose 🚫",
        "Stop loving you 💔",
        "Lie to you 🙅‍♂️",
        "All the above 🧡",
      ],
      answer: "All the above 🧡",
    },
    {
      id: 9,
      question: "What's something I always say?",
      Options: [
        "I'm okay 😂",
        "God's got us 🙏",
        "I miss you 😔",
        "I love you 😘",
      ],
      answer: "I love you 😘",
    },
    {
      id: 10,
      question: "What's something I always pray for",
      Options: [
        "Success for Both of us 🙏",
        "Money 💸",
        "Fame 🌍",
        "A new phone 📱",
      ],
      answer: "Success for Both of us 🙏",
    },
  ];

  const [currentAns, setCurrentAns] = useState(0);
  const [showpop, setshowpop] = useState(true);
  const [selectedans, setselectedans] = useState(
    Array(loveQuestions.length).fill(null)
  );
  const [finish, setfinish] = useState(false);

  if (showpop) {
    return <Popup setPop={setshowpop} />;
  }

  function gonext() {
    if (currentAns < loveQuestions.length - 1) {
      setCurrentAns(currentAns + 1);
    } else {
      setfinish(true);
    }
  }
  function handleselect(o) {
    const newAns = [...selectedans];
    newAns[currentAns] = o;
    setselectedans(newAns);
    console.log(selectedans);
  }
  let score = 0;
  loveQuestions.forEach((q, i) => {
    if (selectedans[i] === q.answer) {
      score++;
    }
  });

  const fillpercent = (score / loveQuestions.length) * 100;

  if (finish) {
    return <Loveresult scores={fillpercent} retry={retry} />;
  }
  function retry() {
    setshowpop(true);
    setfinish(false);
    setselectedans(Array(loveQuestions.length).fill(null));
    setCurrentAns(0);
  }

  return (
    <div className="Lovequiz-container">
      <div className="love-gauge">
        <p
          className="gauge-fill"
          style={{
            width: `${fillpercent}%`,
            backgroundColor: "pink",
            height: "100%",
            borderRadius: "12px",
            transition: "width 0.5s ease-in-out",
          }}
        >
          💖
        </p>
      </div>

      <p className="head">
        <strong>Hw well do u knw me</strong>
      </p>
      <p className="heart">🧡💖</p>

      <h4>{loveQuestions[currentAns].question}</h4>

      <div className="options">
        {loveQuestions[currentAns].Options.map((o, index) => (
          <p
            key={index}
            onClick={() => handleselect(o)}
            style={{
              backgroundColor:
                selectedans[currentAns] === o
                  ? "pink"
                  : " rgba(255, 255, 255, 0.2)",
            }}
          >
            {o}
          </p>
        ))}
      </div>

      <div className="nav-btn">
        <button
          disabled={currentAns === 0}
          onClick={() => setCurrentAns(currentAns - 1)}
        >
          Previous
        </button>
        <button onClick={gonext} disabled={!selectedans[currentAns]}>
          {currentAns === loveQuestions.length - 1 ? "Finish" : "next"}
        </button>
      </div>
    </div>
  );
}
export default Lovequiz;
