import React, { useEffect } from "react";
import { Button } from "../Button/Button";
import "./About.css";
import Nose from "./images/nose.png";
import MetAge from "./images/MetAge.png";
import NosenudgePFP from "./images/nosenudge.png";
import FTWYanPFP from "./images/ftwYan.webp";

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
            <span>The</span> <span>999</span> <span>Noses</span>
          </div>
          <div className="About-top-description-body">
            999 Noses sniffing for other body parts for the ultimate reunion into a single 3D metaverse-ready body.
            <br /><br />
            Staking for $SNIFF to participate in the world of MetAge.
          </div>
        </div>
        <div className="About-top-traits-button-and-image">
          <div className="About-top-traits-and-button">
            <div className="About-top-traits">
              <div className="About-top-trait">
                <span>Supply</span>
                <span>999</span>
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
              To build a unique meta-body that belongs to you, part by part. Pioneer collection of the MetAge saga. Self-love & empowerment. Love thyself.
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
        <div className="About-mid-roadmap-title">Vision</div>
        <div className="About-mid-roadmap-image">
          <img src={MetAge} alt="Vision" />
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
            <div className="About-bottom-discord-title">Open Discord</div>
            <div className="About-bottom-discord-body">
              Come on in and join the communosety.
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
                  (window.location.href = "https://discord.gg/t5wc8x2Htz")
                }
              >
                Join the Discord
              </Button>
            </div>
          </div>
          <div className="About-bottom-team">
            <div className="About-bottom-team-title">Team</div>
            <div className="About-bottom-team-body">
              <div className="About-bottom-team-member">
                <div className="About-bottom-team-member-pfp">
                  <img
                    src={NosenudgePFP}
                    alt="nosenudge pfp"
                  />
                </div>
                <div className="About-bottom-team-member-name">
                  <span>nosenudge.sol</span>
                  <a href="https://twitter.com/nosnaj" target="_blank" rel="noopener noreferrer">
                    <img

                      src="https://www.svgrepo.com/show/183608/twitter.svg"
                      alt="Twitter"
                    />
                  </a>
                </div>
                <div className="About-bottom-team-member-description">
                  <span>Dad, builder, art, writer, NFT flipooor.</span>
                </div>
              </div>
              <div className="About-bottom-team-member">
                <div className="About-bottom-team-member-pfp">
                  <img
                    src={FTWYanPFP}
                    alt="ftwYan pfp"
                  />
                </div>
                <div className="About-bottom-team-member-name">
                  <span>ftwYan</span>
                  <a href="https://twitter.com/ftWINyan" target="_blank" rel="noopener noreferrer">
                    <img

                      src="https://www.svgrepo.com/show/183608/twitter.svg"
                      alt="Twitter"
                    />
                  </a>
                </div>
                <div className="About-bottom-team-member-description">
                  <span>Marketing, socials, community, streamer.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
