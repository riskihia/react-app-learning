import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
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
      <Skill teks="bahasa" icon="&#128509;" bg="red" />
      <Skill teks="javascript" icon="&#128508;" bg="yellow" />
      <Skill teks="devil" icon="&#128520;" bg="violet" />
      <Skill teks="hulk" icon="&#129314;" bg="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <span className="skill" style={{ backgroundColor: props.bg }}>
      {props.teks} {props.icon}
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
