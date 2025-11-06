import { useEffect, useState } from "react";
import Popup from "./love-quiz-pop-up";
import Loveresult from "./Love-Result";
import Loader from "./reloader";

function Lovequiz() {
  const loveQuestions = [
   
    
  {
    id: 1,
    question: "What's your favorite way we spend time together remotely?",
    option: ["Video Calls 🥰", "Texting all day 🤩 ", "Watching movies together 😊", "Voice calls 📞"],
    answer: "Voice calls 📞" ,
  },
  {
    id: 2,
    question: "Which type of message from me makes you smile?",
    option: ["Good Morning texts ✉", "calling you cute names 😄", "Funny videos 🎬", "Nothing 🎇"],
    answer: "Good Morning texts ✉",
  },
  {
    id: 3,
    question: "Which small gesture from me makes you feel loved?",
    option: ["Good morning messages ☀", "Surprise emojis 😘", "Cute voice notes 🎤", "Sharing songs 🎶"],
    answer: "Cute voice notes 🎤",
  },
  {
    id: 4,
    question: "If we could teleport for a weekend, what would you want to do?",
    option: ["Beach day 🏖", "Picnic in the park 🍉", "Explore a city 🏙", "Stay cozy at home 🛋"],
    answer: "Picnic in the park 🍉",
  },
  {
    id: 5,
    question: "Do you feel loved even from afar?",
    option: ["Yes💖", "Always 🥰", "Nah 😏", "Sometimes 🙄"],
    answer: "Always 🥰",
  },
  {
    id: 6,
    question: "If I stopped talking  for a day ,what wolud you do ?",
    option: ["Text you imidiately 😥", "Wouldn't really notice you went 😪", "Miss you buh stay quiet 😶", "Wait a while to see if ill text 🗯"],
    answer: "Text you imidiately 😥",
  },
  {
    id: 7,
    question: "Do I make you happy for real?",
    option: ["Yes very Happy 😍", "Hmm yh 😒", "Sometimes 🙂", "Yh Buh i hide it 😋"],
    answer: "Yes very Happy 😍",
  },
  {
    id: 8,
    question: "When you think about me, what feeling comes first?",
    option: ["Peace💖", "Doubt 😔", "Confusion 😟", "Anger 🤬"],
    answer: "Peace💖",
  },
  {
    id: 9,
    question: "If someone tried to get close to me,what would you do?",
    option: ["Get Jealous 🤗", "Stay calm buh watch 👀", "Dont really care 🥱", "Question whuever it is 🎭 "],
    answer: "Dont really care 🥱",
  },
  {
    id: 10,
    question: "What’s your favorite memory of us so far?",
    option: ["Late-night talks 🌙", "Funny video call moments 😂", "Sending each other memes 📱", "Planning our future trips 🌍"],
    answer: "Funny video call moments 😂",
  },
  {
    id:11,
    question:"If i ever walked away,would you feel regret?",
    option:["A little 😏","Yes a lot 😥","Dont think so 🤨","Maybe 😑"],
    answer:"Yes a lot 😥",
  },

  {
    id:11,
    question:"What do you think is my biggest weakness in love?",
    option:["You care too much 😒","You over think things 😟","You fear losing people 💔","You love deeply 💖"],
    answer:"You over think things 😟",
  },
];
     

  const [currentAns, setCurrentAns] = useState(0);
  const [showpop, setshowpop] = useState(true);
  const [selectedans, setselectedans] = useState(
    Array(loveQuestions.length).fill(null)
  );
  const [finish, setfinish] = useState(false);
  const [showloader, setShowloader] = useState(true);
  useEffect(() => {
    if (!showpop) {
      const timer = setTimeout(() => {
        setShowloader(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showpop]);

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
  let rounded=Math.round(fillpercent)
  console.log(rounded)

  if (showloader) {
    return <Loader />;
  }

  if (finish) {
    return <Loveresult scores={rounded} retry={retry} />;
  }
  function retry() {
    setshowpop(true);
    setfinish(false);
    setselectedans(Array(loveQuestions.length).fill(null));
    setCurrentAns(0);
    setShowloader(true)
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
        {loveQuestions[currentAns].option.map((o, index) => (
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
