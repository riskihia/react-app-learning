import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const profileData = [
  {
    name: "Riski Rahmat Hia",
    intro:
      "Hai saya sangat senang, maka saya suka bermain. Dalam kehidupan ini",
    skill: [
      {
        skillName: "javascript",
        skillIcon: "&#128509;",
      },
      {
        skillName: "php",
        skillIcon: "&#128509;",
      },
      {
        skillName: "laravel",
        skillIcon: "&#128509;",
      },
      {
        skillName: "react js",
        skillIcon: "&#128509;",
      },
    ],
    avatar: "avatar.jpg",
  },
  {
    name: "Fransiskus Saferius Hia",
    intro:
      "Hai saya sangat senang, maka saya suka bermain. Dalam kehidupan ini",
    skill: [
      {
        skillName: "bun",
        skillIcon: "&#128509;",
      },
      {
        skillName: "google cloud",
        skillIcon: "&#128509;",
      },
      {
        skillName: ".NET",
        skillIcon: "&#128509;",
      },
    ],
    avatar: "avatar.jpg",
  },
  {
    name: "Putri Eunike Hia",
    intro:
      "Hai saya sangat senang, maka saya suka bermain. Dalam kehidupan ini",
    skill: [
      {
        skillName: "Motor",
        skillIcon: "&#128509;",
      },
      {
        skillName: "Mobile",
        skillIcon: "&#128509;",
      },
      {
        skillName: "Free Fire",
        skillIcon: "&#128509;",
      },
      {
        skillName: "Mobile Legend",
        skillIcon: "&#128509;",
      },
    ],
    avatar: "avatar.jpg",
  },
];

const skillData = [
  {
    name: "javascript",
    icon: "😍",
    color: "red",
  },
  {
    name: "php",
    icon: "💖",
    color: "green",
  },
  {
    name: "laravel",
    icon: "👌",
    color: "blue",
  },
];

function App() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}

          <SkillList />
        </div>
      </div>
      <Footer />
    </>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="./avatar.jpg" />
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h1 className="h1">Riski Rahmat Hia</h1>
      <p>
        Nama saya riski sejahtera hia. saya sangat tertarik dengan dunia
        pemrograman, jadi saya belajar setiap hari.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {/* <Skill teks="bahasa" icon="&#128509;" bg="red" />
      <Skill teks="javascript" icon="&#128508;" bg="yellow" />
      <Skill teks="devil" icon="&#128520;" bg="violet" />
      <Skill teks="hulk" icon="&#129314;" bg="green" /> */}

      {skillData.map((skill) => (
        <Skill skillObj={skill} key={skill.name} />
      ))}
    </div>
  );
}

function Skill(props) {
  return (
    // <span className="skill" style={{ backgroundColor: props.bg }}>
    //   {props.teks} {props.icon}
    // </span>
    <span className="skill" style={{ backgroundColor: props.skillObj.color }}>
      {props.skillObj.name} {props.skillObj.icon}
    </span>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer style={{ backgroundColor: "gray" }}>
      {isOpen && (
        <div>
          <p>
            we're open until {closeHour}:00. Come visit us or ordoer online.
          </p>
          <button
            style={{ backgroundColor: "violet", color: "white", padding: 12 }}
          >
            order
          </button>
        </div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
