import React, { useEffect } from "react";
import { Button } from "../Button/Button";
import "./About.css";

export const About = () => {
  useEffect(() => {
    const el = document.querySelector("#About");

    el.addEventListener("mousemove", (e) => {
      el.style.backgroundPositionX = -e.offsetX * 0.5 + "px";
      el.style.backgroundPositionY = -e.offsetY * 0.5 + "px";
    });
  }, []);

  return (
    <section className="About" id="About">
      <div className="About-top">
        <div className="About-top-description">
          <div className="About-top-description-title">
            <span>The</span> <span>3,456</span> <span>Noses</span>
          </div>
          <div className="About-top-description-body">
            Bearing only marks in homage to their lineage, decided against their
            originators' war-mongering nature and started living in harmony.
            Each brings to the table the best they can offer, in exchange only
            for camaraderie. Instead of competing for resources, the Noses got
            together to figure out how to leverage each others' strengths to
            advance as a society.
          </div>
        </div>
        <Button>asdas</Button>
      </div>
    </section>
  );
};
