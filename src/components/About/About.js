import React, { useEffect } from "react";
import { Button } from "../Button/Button";
import "./About.css";
import Nose from "./images/nose.png";
import Roadmap from "./images/Background_Galaxy2.png";

export const About = () => {
  useEffect(() => {
    const el = document.querySelector("#About");

    el.addEventListener("mousemove", (e) => {
      el.style.backgroundPositionX = -e.offsetX * 0.25 + "px";
      el.style.backgroundPositionY = -e.offsetY * 0.25 + "px";
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
            You and I, we are Boogers. We were the products of the Noses.
            Unbeknownst to the Noses, the original Snot element still exists and
            has gained sentience. We were transported to a foreign world, right
            after we were made. The primordial goo that started all that life on
            this planet? Yup, that's the Noses' doing, all by accident.
          </div>
        </div>
        <div className="About-top-traits-button-and-image">
          <div className="About-top-traits-and-button">
            <div className="About-top-traits">
              <div className="About-top-trait">
                <span>Supply</span>
                <span>3,456</span>
              </div>
              <div className="About-top-trait">
                <span>Traits</span>
                <span>160+</span>
              </div>
              <div className="About-top-trait">
                <span>Factions</span>
                <span>3</span>
              </div>
              <div className="About-top-trait">
                <span>Blockchain</span>
                <span>Solana</span>
              </div>
              <div className="About-top-trait">
                <span>Price</span>
                <span>◎ 0.25</span>
              </div>
            </div>
            <Button
              onClick={() =>
                (window.location.href = "https://noseage.gitbook.io")
              }
            >
              Read the Aitepaper
            </Button>
            <Button disabled>Preparing The Ritual</Button>
          </div>
          <div className="About-top-image">
            <img src={Nose} alt="Nose" />
          </div>
        </div>
        <div className="About-top-inspiration-value">
          <div className="About-top-inspiration">
            <div className="About-top-inspiration-title">Inspiration</div>
            <div className="About-top-inspiration-body">
              To build a unique meta-body that belongs to you, part by part. 1st collection of the 👃👁👄👩👨 VisAge series. Self-love & empowerment. Love thyself.
            </div>
          </div>
          <div className="About-top-value">
            <div className="About-top-value-title">Core Values</div>
            <div className="About-top-value-body">
              Self-love // Building // Empowerment
            </div>
          </div>
          <div>
            <Button
              onClick={() =>
              (window.location.href =
                "https://noseage.gitbook.io/nose-age-nft-aitepaper/about/ethos-and-inspiration")
              }
            >
              Read Our Ethos
            </Button>
          </div>
        </div>
      </div>
      <div className="About-mid">
        <div className="About-mid-roadmap-title">Roadmap</div>
        <div className="About-mid-roadmap-image">
          <img src={Roadmap} alt="Roadmap" />
        </div>
        <div className="About-mid-roadmap-button">
          <Button
            onClick={() =>
            (window.location.href =
              "https://noseage.gitbook.io/nose-age-nft-aitepaper/about/roadmap/relaunch-roadmap")
            }
          >
            Detailed Roadmap
          </Button>
        </div>
      </div>
      <div className="About-bottom">
        <div className="About-bottom-discord-team">
          <div className="About-bottom-discord">
            <div className="About-bottom-discord-logo">
              <img
                src="https://www.svgrepo.com/show/353655/discord-icon.svg"
                alt="Discord"
              />
            </div>
            <div className="About-bottom-discord-title">Closed Discord</div>
            <div className="About-bottom-discord-body">
              We despise the closed discord meta as much as the next person, but
              if you really want in, you will find a way. (aka we don't have
              mods and we want to keep it organic) No WL grinding.
            </div>
            <div className="About-bottom-discord-buttons">
              <Button
                onClick={() =>
                  (window.location.href = "https://noseage.gitbook.io")
                }
              >
                Read the Aitepaper
              </Button>
            </div>
            <div className="About-bottom-discord-buttons">
              <Button
                onClick={() =>
                  (window.location.href = "https://forms.gle/kHVNXys92ttNkm5L7")
                }
              >
                99% Nose Owners Fail This Test, Can You Beat The 1%?
              </Button>
            </div>
          </div>
          <div className="About-bottom-team"></div>
        </div>
      </div>
    </section>
  );
};
