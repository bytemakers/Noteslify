import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <section className="news-section">
      <iframe
        title="newsletter"
        src="https://airtable.com/embed/shrUwGnyLnDvLvBoJ?backgroundColor=purple"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen=""
        style={{ position: "absolute", top: "0", left: "0" }}></iframe>
    </section>
  );
};
export default NewsLetter;
