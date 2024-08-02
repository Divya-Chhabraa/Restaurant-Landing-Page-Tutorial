import React from "react";
import UI from "../Assets/UI.png";
import SS from "../Assets/screen-share.png";
import MSG from "../Assets/message.png";

const Work = () => {
  const workInfoData = [
    {
      image: UI,
      title: "Friendly Interface",
      text: "Join or host meetings with just a few clicks.",
    },
    {
      image: SS,
      title: "Screen Sharing",
      text: "Collaborate effectively by sharing your screen in real-time",
    },
    {
      image: MSG,
      title: "In-Call Messaging",
      text: "Communicate seamlessly with our built-in chat feature.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Designed for You</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
